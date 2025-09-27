export default async function handler(req, res) {
  const API_BASE = "https://ekkysukatobrut.storedigital.web.id/api/application";
  const API_KEY = "ptla_YgqpdG7fSnqMaitrge1rEVIy9qOuRHNuN9eidBMGlD1";

  try {
    const apiRes = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await apiRes.json();
    return res.status(apiRes.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
