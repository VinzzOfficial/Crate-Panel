export default async function handler(req, res) {
  const API_BASE = "https://ekkysukatobrut.storedigital.web.id/api/application";
  const API_KEY = "ptla_YgqpdG7fSnqMaitrge1rEVIy9qOuRHNuN9eidBMGlD1";

  try {
    const apiRes = await fetch(`${API_BASE}/nests/5/eggs/15`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    });

    const data = await apiRes.json();
    return res.status(apiRes.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
