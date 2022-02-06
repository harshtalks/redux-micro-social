import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchNotifications,
  selectAllNotifications
} from "../features/notifications/notificationSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const unreadNotifications = notifications.filter((n) => !n.read).length;
  const fetchNewNotif = () => dispatch(fetchNotifications());

  let unreadNotificationsBadge;

  if (unreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{unreadNotifications}</span>
    );
  }

  return (
    <nav>
      <section>
        <h1>Thunk Social Media</h1>

        <div className="navContent">
          <div className="navLinks" style={{ paddingBottom: "10px" }}>
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="button" onClick={fetchNewNotif}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  );
};
