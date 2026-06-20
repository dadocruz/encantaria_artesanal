"use client";

import { useState } from "react";

/**
 * Upload de imagens (MVP) — gera apenas preview local no navegador.
 *
 * Para produção, troque o handler por upload real:
 *   - Supabase Storage (supabase.storage.from('media_assets').upload(...))
 *   - ou Cloudinary
 * e salve a URL pública em product.images. As fotos finais também podem ser
 * colocadas manualmente em public/products.
 */
export function ImageUpload() {
  const [previews, setPreviews] = useState<string[]>([]);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const urls = Array.from(files).map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...urls]);
  }

  return (
    <div>
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cobre/40 bg-white/50 px-6 py-10 text-center text-sm text-marrom/60 transition hover:border-cobre">
        <span className="text-2xl">⬆</span>
        <span className="mt-2">
          Clique para enviar imagens do produto
          <br />
          <span className="text-xs text-marrom/40">
            (preview local — integração de storage no futuro)
          </span>
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </label>

      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {previews.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={`Pré-visualização ${i + 1}`}
              className="aspect-square w-full rounded-xl object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}
