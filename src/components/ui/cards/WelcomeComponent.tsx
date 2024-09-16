import { Profile } from "@/types";

interface WelcomeComponentProps {
  user: Profile;
}

const WelcomeComponent: React.FC<WelcomeComponentProps> = ({ user }) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <section className="card card__welcome">
      <section className="card__header">
        <h1 className="text-color-primary">
          Hola, {user?.first_name} {user?.last_name}
        </h1>
        <p className="text-color-dark-light">
          Hoy es {day} de {month} de {year}
        </p>
      </section>
    </section>
  );
};

export default WelcomeComponent;
