export default function AuthErrorPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold text-red-600">Hibás bejelentkezés</h1>
      <p>Kérlek próbáld újra.</p>
      <a href="/admin/login" className="underline text-blue-600">
        Vissza a bejelentkezéshez
      </a>
    </div>
  );
}
