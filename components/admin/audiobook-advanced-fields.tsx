"use client";

import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GENDERS } from "@/lib/validations/advanced-config";
import {
  audiobookAdvancedFieldsSchema,
  type AudiobookAdvancedFieldsValues,
} from "@/lib/validations/audiobook-advanced";
import { buildAudiobookAdvancedConfig, parseAudiobookAdvancedConfig } from "@/lib/audiobook-advanced-config";

/** Structured dropdowns/inputs for a podcast.audiobook.BookConfig-shaped
 * "advanced" config. Same custom-form-control pattern as
 * AdvancedConfigFields (podcast/course): takes/returns one JSON string. */
export function AudiobookAdvancedFields({
  value,
  onChange,
}: {
  value: string;
  onChange: (json: string) => void;
}) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<AudiobookAdvancedFieldsValues>({
    resolver: zodResolver(audiobookAdvancedFieldsSchema),
    mode: "onChange",
    defaultValues: parseAudiobookAdvancedConfig(safeParse(value)),
  });
  const pronunciations = useFieldArray({ control, name: "pronunciations" });

  const watched = watch();
  const serialized = JSON.stringify(watched);
  useEffect(() => {
    const json = JSON.stringify(buildAudiobookAdvancedConfig(watched), null, 2);
    const next = json === "{}" ? "" : json;
    if (next !== value) onChange(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized]);

  return (
    <div className="advanced-fields">
      <h3>Narrator</h3>
      <div className="field-row">
        <div className="field">
          <label>Gender</label>
          <select {...register("narratorGender")}>
            {GENDERS.map((v) => (
              <option key={v} value={v}>{v || "(any)"}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Locale (blank = follow the book&apos;s language)</label>
          <input placeholder="en-GB" {...register("narratorLocale")} />
        </div>
      </div>
      <div className="field-row" style={{ marginTop: "8px" }}>
        <div className="field">
          <label>Exact voice (optional, e.g. en-GB-RyanNeural)</label>
          <input {...register("narratorVoice")} />
        </div>
        <div className="field">
          <label>Rate (optional, e.g. -5%)</label>
          <input {...register("narratorRate")} />
          {errors.narratorRate && (
            <span className="admin-field-error">{errors.narratorRate.message}</span>
          )}
        </div>
      </div>

      <h3 style={{ marginTop: "22px" }}>Which sections to read</h3>
      <div className="field-row">
        <div className="field">
          <label>Always keep (one per line: a section number or title text)</label>
          <textarea rows={3} {...register("keep")} />
        </div>
        <div className="field">
          <label>Always skip (same format)</label>
          <textarea rows={3} {...register("skip")} />
        </div>
      </div>
      <p className="sample-download" style={{ marginTop: "6px" }}>
        Run &quot;book preview&quot; on the command line first to see each section&apos;s
        number, or just leave both blank and let the defaults decide.
      </p>
      <div className="field-row" style={{ marginTop: "10px" }}>
        <div className="field">
          <label>Table-of-contents depth (blank = every level)</label>
          <input type="number" {...register("tocDepth")} />
        </div>
        <div className="field">
          <label>Merge sections shorter than this many words</label>
          <input type="number" placeholder="40" {...register("minWords")} />
        </div>
      </div>
      <label className="checkbox-field" style={{ marginTop: "12px" }}>
        <input type="checkbox" {...register("announceChapters")} />
        Say the chapter title when its text has no heading
      </label>
      <label className="checkbox-field" style={{ marginTop: "8px" }}>
        <input type="checkbox" {...register("credit")} />
        Open with &quot;Title, by Author&quot; unless the book already says so
      </label>

      <h3 style={{ marginTop: "22px" }}>Pauses (milliseconds)</h3>
      <div className="field-row">
        <div className="field">
          <label>Paragraph</label>
          <input type="number" placeholder="380" {...register("pauseParagraph")} />
        </div>
        <div className="field">
          <label>Heading</label>
          <input type="number" placeholder="900" {...register("pauseHeading")} />
        </div>
        <div className="field">
          <label>Scene break</label>
          <input type="number" placeholder="1500" {...register("pauseSceneBreak")} />
        </div>
      </div>
      <div className="field-row" style={{ marginTop: "8px" }}>
        <div className="field">
          <label>Chapter start</label>
          <input type="number" placeholder="700" {...register("pauseChapterHead")} />
        </div>
        <div className="field">
          <label>Chapter end</label>
          <input type="number" placeholder="1800" {...register("pauseChapterTail")} />
        </div>
      </div>

      <h3 style={{ marginTop: "22px" }}>Pronunciations</h3>
      {pronunciations.fields.map((field, i) => (
        <div key={field.id} className="field-row" style={{ marginTop: "6px" }}>
          <div className="field">
            <input placeholder="Word, e.g. Gryphon" {...register(`pronunciations.${i}.term`)} />
          </div>
          <div className="field">
            <input placeholder="Says as, e.g. Griffin" {...register(`pronunciations.${i}.saysAs`)} />
          </div>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => pronunciations.remove(i)}>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-ghost btn-sm"
        style={{ marginTop: "10px" }}
        onClick={() => pronunciations.append({ term: "", saysAs: "" })}
      >
        + Add pronunciation
      </button>

      <h3 style={{ marginTop: "22px" }}>Anything else (JSON, optional)</h3>
      <p className="sample-download">
        For settings not covered above. Leave blank if you don&apos;t need it.
      </p>
      <div className="field">
        <textarea
          rows={5}
          className="code-input"
          spellCheck={false}
          placeholder="{}"
          aria-label="Extra settings (JSON)"
          {...register("extraJson")}
        />
        {errors.extraJson && (
          <span className="admin-field-error">
            {errors.extraJson.message} &mdash; this part won&apos;t be saved until it&apos;s fixed.
          </span>
        )}
      </div>
    </div>
  );
}

function safeParse(json: string): Record<string, unknown> | undefined {
  if (!json || !json.trim()) return undefined;
  try {
    return JSON.parse(json);
  } catch {
    return undefined;
  }
}
