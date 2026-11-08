const YOUTUBE_HOSTS = [
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "music.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
]

const ID_PATTERN = /^[A-Za-z0-9_-]{11}$/

export function getYouTubeId(url: string): string | null {
  if (!url) return null

  const trimmed = url.trim()

  if (ID_PATTERN.test(trimmed)) return trimmed

  let parsed: URL
  try {
    parsed = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`)
  } catch {
    return null
  }

  if (parsed.hostname === "youtu.be") {
    const id = parsed.pathname.slice(1).split("/")[0]
    return ID_PATTERN.test(id) ? id : null
  }

  if (!YOUTUBE_HOSTS.includes(parsed.hostname)) return null

  const fromQuery = parsed.searchParams.get("v")
  if (fromQuery && ID_PATTERN.test(fromQuery)) return fromQuery

  const [, prefix, id] = parsed.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/) ?? []
  if (prefix && id && ID_PATTERN.test(id)) return id

  return null
}

export function getYouTubeThumbnail(
  url: string,
  quality: "hq" | "max" = "hq"
): string | null {
  const id = getYouTubeId(url)
  if (!id) return null

  const file = quality === "max" ? "maxresdefault" : "hqdefault"
  return `https://i.ytimg.com/vi/${id}/${file}.jpg`
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url)
  if (!id) return null

  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
}
