
import { XCircleIcon, HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline'


interface NotificationCardProps {
  statusNotification: string;
  notification: Notification;
}
interface Notification {
  doctorName: string;
  day: string;
  hour: string;
}
const NotificationCard: React.FC<NotificationCardProps> = ({ statusNotification, notification }) => {
  switch (statusNotification) {
    case 'cancelled':
      return (
        <article className="card-notification card-notification--cancelled">
          <header className="card-notification__header">
            <XCircleIcon className="size-6 text-warning-dark" /> <h6 className="font-semibold">¡Tu reserva ha sido cancelada!</h6>
          </header>
          <section className="card-notification__body">
            <p>Su cita con el médico <span className="font-semibold">{notification.doctorName}</span> ha sido confirmada para el día <span className="font-semibold">{notification.day}</span> a las <span className="font-semibold">{notification.hour}</span>. Por favor, llegue 10 minutos antes de su cita y traiga cualquier documentación médica relevante.</p>
          </section>
        </article>
      )
    case 'pending':
      return (
        <article className="card-notification card-notification--pending">
          <header className="card-notification__header">
            <HeartIcon className="size-6 text-info-dark" /> <h6 className="font-semibold"> ¡Gracias por reservar su cita!</h6>
          </header>
          <section className="card-notification__body">
            <p>Lamentamos informarte que la cita que tenías con el médico <span className="font-semibold">{notification.doctorName}</span> para el día <span className="font-semibold">{notification.day}</span> a las <span className="font-semibold">{notification.hour}</span> ha sido cancelada.</p>
          </section>
        </article>
      )
    case 'accepted':
      return (
        <article className="card-notification card-notification--accepted">
          <header className="card-notification__header">
            <CheckCircleIcon className="size-6 text-success-dark" /> <h6 className="font-semibold">¡Cita confirmada!</h6>
          </header>
          <section className="card-notification__body">
            <p>Su solicitud con el médico <span className="font-semibold">{notification.doctorName}</span> para el día <span className="font-semibold">{notification.day}</span> a las <span className="font-semibold">{notification.hour}</span> ha sido recibida. Le enviaremos una confirmación una vez que el médico revise su disponibilidad.</p>
          </section>
        </article>
      )
  }
}

export default NotificationCard;