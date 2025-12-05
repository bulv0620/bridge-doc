export async function getLatestVersion(): Promise<string> {
  const url = "https://api.github.com/repos/bulv0620/bridge/releases/latest";

  const res = await fetch(url, {
    headers: {
      "Accept": "application/vnd.github+json",
      "User-Agent": "version-checker" // GitHub 要求提供 UA
    }
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = await res.json();
  return data.tag_name; // 即版本号
}