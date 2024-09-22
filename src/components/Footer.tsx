const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="grid-area footer p-4 mt-4">
      <p className="text-sm text-center">© {year} Hecho con ❤️ por Cristina Bosa</p>
    </footer>
  );
}
export default Footer;