import { NotificationStatus } from "@/types/enum";
import { CircleX, HeartIcon, CheckCheckIcon } from "lucide-react";

interface NotificationCardProps {
  statusNotification: string;
  notification: Notification;
}
interface Notification {
  doctorName: string;
  day: string;
  hour: string;
}
const NotificationCard: React.FC<NotificationCardProps> = ({
  statusNotification,
  notification,
}) => {
  switch (statusNotification) {
    case NotificationStatus.CANCELLED:
      return (
        <article className="card card__notification" data-status="error">
          <header className="card__header">
            <CircleX className="size-6 text-warning-dark" />{" "}
            <h6 className="font-semibold">¡Tu reserva ha sido cancelada!</h6>
          </header>
          <section className="card__body">
            <p>
              Su cita con el médico{" "}
              <span className="font-semibold">{notification.doctorName}</span>{" "}
              ha sido confirmada para el día{" "}
              <span className="font-semibold">{notification.day}</span> a las{" "}
              <span className="font-semibold">{notification.hour}</span>. Por
              favor, llegue 10 minutos antes de su cita y traiga cualquier
              documentación médica relevante.
            </p>
          </section>
        </article>
      );
    case NotificationStatus.PENDING:
      return (
        <article className="card card__notification" data-status="warning">
          <header className="card__header">
            <HeartIcon className="size-6 text-info-dark" />{" "}
            <h6 className="font-semibold"> ¡Gracias por reservar su cita!</h6>
          </header>
          <section className="card__body">
            <p>
              Lamentamos informarte que la cita que tenías con el médico{" "}
              <span className="font-semibold">{notification.doctorName}</span>{" "}
              para el día{" "}
              <span className="font-semibold">{notification.day}</span> a las{" "}
              <span className="font-semibold">{notification.hour}</span> ha sido
              cancelada.
            </p>
          </section>
        </article>
      );
    case NotificationStatus.ACCEPTED:
      return (
        <article className="card card__notification" data-status="success">
          <header className="card__header">
            <CheckCheckIcon className="size-6 text-success-dark" />{" "}
            <h6 className="font-semibold">¡Cita confirmada!</h6>
          </header>
          <section className="card__body">
            <p>
              Su solicitud con el médico{" "}
              <span className="font-semibold">{notification.doctorName}</span>{" "}
              para el día{" "}
              <span className="font-semibold">{notification.day}</span> a las{" "}
              <span className="font-semibold">{notification.hour}</span> ha sido
              recibida. Le enviaremos una confirmación una vez que el médico
              revise su disponibilidad.
            </p>
          </section>
        </article>
      );
  }
};

export default NotificationCard;