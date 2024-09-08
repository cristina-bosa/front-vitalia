import NotificationCard from "./NotificationCard";

const NotificationComponent = () => {
  const notifications = {
    doctorName: "Dr. John Doe",
    day: "12/12/2021",
    hour: "10:00 AM",
  };
  return (
    <section className="">
      <section className="card__header">
        <span className="text-color-dark-light">Últimas notificaciones</span>
      </section>
      <section className="card__body card__notifications">
        <NotificationCard
          statusNotification="pending"
          notification={notifications}
        />
        {/* <NotificationCard
          statusNotification="cancelled"
          notification={notifications}
        />
        <NotificationCard
          statusNotification="accepted"
          notification={notifications}
        /> */}
      </section>
    </section>
  );
};
export default NotificationComponent;
