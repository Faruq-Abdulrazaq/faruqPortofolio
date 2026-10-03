"use client";

import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  advancedFieldsSchema,
  FORMATS,
  GENDERS,
  PACING,
  PERSONAS,
  ROLES,
  TURN_TAKING,
  UNATTRIBUTED,
  VOICE_ASSIGNMENT,
  type AdvancedFieldsValues,
} from "@/lib/validations/advanced-config";
import { buildAdvancedConfig, parseAdvancedConfig } from "@/lib/advanced-config";

/** Structured dropdowns/inputs for a podcast.models.Config-shaped "advanced"
 * config (cast, pattern, performance, pronunciations), used by both the
 * podcast form and the course form's shared "defaults". Behaves like a
 * single custom form control: takes the config as a JSON string and calls
 * onChange with an updated JSON string, so the parent form only ever deals
 * with one string field. `showFormat` is off for course defaults, since the
 * course engine sets its own per-lesson format automatically when it's
 * left unset. */
export function AdvancedConfigFields({
  value,
  onChange,
  showFormat = true,
}: {
  value: string;
  onChange: (json: string) => void;
  showFormat?: boolean;
}) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<AdvancedFieldsValues>({
    resolver: zodResolver(advancedFieldsSchema),
    mode: "onChange", // this form is never submitted directly -- validate live instead
    // react-hook-form only reads defaultValues once, at mount -- this is a
    // self-contained control, not meant to re-sync if `value` changes from
    // outside afterwards (it never does in practice -- see the forms that
    // use this).
    defaultValues: parseAdvancedConfig(safeParse(value)),
  });
  const speakers = useFieldArray({ control, name: "speakers" });
  const pronunciations = useFieldArray({ control, name: "pronunciations" });

  const watched = watch();
  const serialized = JSON.stringify(watched);
  useEffect(() => {
    const json = JSON.stringify(buildAdvancedConfig(watched), null, 2);
    const next = json === "{}" ? "" : json;
    if (next !== value) onChange(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized]);

  return (
    <div className="advanced-fields">
      <h3>Cast</h3>
      <div className="field-row">
        <div className="field">
          <label>Default locale</label>
          <input placeholder="en-GB" {...register("castDefaultLocale")} />
        </div>
        <div className="field">
          <label>Unlabelled lines go to</label>
          <select {...register("castUnattributed")}>
            {UNATTRIBUTED.map((v) => (
              <option key={v} value={v}>
                {v === "" ? "(default: previous speaker)" : v}
              </option>
            ))}
          </select>
        </div>
      </div>

      {speakers.fields.map((field, i) => (
        <div key={field.id} className="admin-card" style={{ marginTop: "10px" }}>
          <div className="field-row">
            <div className="field">
              <label>Name</label>
              <input placeholder="MAYA" {...register(`speakers.${i}.name`)} />
            </div>
            <div className="field">
              <label>Gender</label>
              <select {...register(`speakers.${i}.gender`)}>
                {GENDERS.map((v) => (
                  <option key={v} value={v}>{v || "(any)"}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Role</label>
              <select {...register(`speakers.${i}.role`)}>
                {ROLES.map((v) => (
                  <option key={v} value={v}>{v || "(guest)"}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Persona</label>
              <select {...register(`speakers.${i}.persona`)}>
                {PERSONAS.map((v) => (
                  <option key={v} value={v}>{v || "(neutral)"}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field-row" style={{ marginTop: "8px" }}>
            <div className="field">
              <label>Locale (optional, e.g. en-IE)</label>
              <input {...register(`speakers.${i}.locale`)} />
            </div>
            <div className="field">
              <label>Exact voice (optional, e.g. en-GB-SoniaNeural)</label>
              <input {...register(`speakers.${i}.voice`)} />
            </div>
            <div className="field">
              <label>Rate (optional, e.g. +10%)</label>
              <input {...register(`speakers.${i}.rate`)} />
              {errors.speakers?.[i]?.rate && (
                <span className="admin-field-error">{errors.speakers[i]?.rate?.message}</span>
              )}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            style={{ marginTop: "8px" }}
            onClick={() => speakers.remove(i)}
          >
            Remove speaker
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-ghost btn-sm"
        style={{ marginTop: "10px" }}
        onClick={() => speakers.append({ name: "", gender: "", role: "", persona: "", locale: "", voice: "", rate: "" })}
      >
        + Add speaker
      </button>

      <h3 style={{ marginTop: "22px" }}>Pattern</h3>
      <div className="field-row">
        <div className="field">
          <label>Turn-taking</label>
          <select {...register("turnTaking")}>
            {TURN_TAKING.map((v) => (
              <option key={v} value={v}>{v === "" ? "(default: script)" : v}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Voice assignment</label>
          <select {...register("voiceAssignment")}>
            {VOICE_ASSIGNMENT.map((v) => (
              <option key={v} value={v}>{v === "" ? "(default: alternate gender)" : v}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Pacing</label>
          <select {...register("pacing")}>
            {PACING.map((v) => (
              <option key={v} value={v}>{v === "" ? "(default: natural)" : v}</option>
            ))}
          </select>
        </div>
      </div>

      <h3 style={{ marginTop: "22px" }}>Show structure</h3>
      {showFormat && (
        <div className="field">
          <label>Format</label>
          <select {...register("format")}>
            {FORMATS.map((v) => (
              <option key={v} value={v}>{v === "" ? "(auto: infer from the cast)" : v}</option>
            ))}
          </select>
        </div>
      )}
      <div className="field-row" style={{ marginTop: "12px" }}>
        <div className="field">
          <label>Tagline (completes &quot;the show that ___&quot;)</label>
          <input {...register("tagline")} />
        </div>
        <div className="field">
          <label>Hook (spoken before the welcome)</label>
          <input {...register("hook")} />
        </div>
      </div>
      <div className="field-row" style={{ marginTop: "12px" }}>
        <div className="field">
          <label>Call to action</label>
          <input {...register("cta")} />
        </div>
        <div className="field">
          <label>Next-episode teaser</label>
          <input {...register("teaser")} />
        </div>
      </div>
      <label className="checkbox-field" style={{ marginTop: "12px" }}>
        <input type="checkbox" {...register("announceSegments")} />
        Read each segment title aloud instead of bridging into it
      </label>

      <h3 style={{ marginTop: "22px" }}>Performance</h3>
      <label className="checkbox-field">
        <input type="checkbox" {...register("directions")} />
        Perform [laughs], [deadpan] and other inline directions (unchecked deletes them)
      </label>
      <label className="checkbox-field" style={{ marginTop: "8px" }}>
        <input type="checkbox" {...register("banter")} />
        Let the other host drop short reactions into long turns
      </label>
      <div className="field" style={{ marginTop: "8px", maxWidth: "220px" }}>
        <label>React after this many words</label>
        <input type="number" {...register("banterAfterWords")} />
      </div>

      <h3 style={{ marginTop: "22px" }}>Pronunciations</h3>
      {pronunciations.fields.map((field, i) => (
        <div key={field.id} className="field-row" style={{ marginTop: "6px" }}>
          <div className="field">
            <input placeholder="Word, e.g. iLO" {...register(`pronunciations.${i}.term`)} />
          </div>
          <div className="field">
            <input placeholder="Says as, e.g. eye-LOW" {...register(`pronunciations.${i}.saysAs`)} />
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
        For settings not covered above &mdash; sponsors, segue lines, co-host bios, custom
        sound effects. Leave blank if you don&apos;t need any of that.
      </p>
      <div className="field">
        <textarea
          rows={6}
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
