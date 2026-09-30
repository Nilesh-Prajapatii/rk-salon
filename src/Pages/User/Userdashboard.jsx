import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
    const [activeSection, setActiveSection] = useState("dashboard");
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "⌂",
        },
        {
            id: "book-appointment",
            label: "Book Appointment",
            icon: "▣",
        },
        {
            id: "appointments",
            label: "My Appointments",
            icon: "📅",
        },
        {
            id: "services",
            label: "Services",
            icon: "✂",
        },
        {
            id: "history",
            label: "Booking History",
            icon: "▤",
        },
        {
            id: "membership",
            label: "Membership",
            icon: "★",
        },
        {
            id: "profile",
            label: "Profile",
            icon: "♙",
        },
    ];

    return (
        <div className="dashboard">

            {/* =========================================================
               HEADER
            ========================================================= */}

            <header className="top-header">

                <div className="logo">
                    RK <span> SALON</span>
                </div>

                <div className="user-area">

                    <span className="notification">
                        🔔
                    </span>

                    <span className="user-name">
                        Customers
                    </span>

                    <span className="arrow">
                        ▼
                    </span>

                </div>

            </header>


            {/* =========================================================
               BODY
            ========================================================= */}

            <div className="dashboard-body">


                {/* =====================================================
                   SIDEBAR
                ===================================================== */}

                <aside className="sidebar">

                    <nav className="sidebar-menu">

                        {menuItems.map((item) => (

                            <button
                                key={item.id}
                                className={`menu-item ${
                                    activeSection === item.id
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveSection(item.id)
                                }
                            >

                                <span className="menu-icon">
                                    {item.icon}
                                </span>

                                <span>
                                    {item.label}
                                </span>

                            </button>

                        ))}


                        {/* LOGOUT */}

                        <button
                            className="menu-item logout"
                            onClick={handleLogout}
                        >

                            <span className="menu-icon">
                                ↪
                            </span>

                            <span>
                                Logout
                            </span>

                        </button>

                    </nav>

                </aside>


                {/* =====================================================
                   MAIN CONTENT
                ===================================================== */}

                <main className="main-content">


                    {/* =================================================
                       DASHBOARD
                    ================================================= */}

                    {activeSection === "dashboard" && (
                        <DashboardContent
                            setActiveSection={setActiveSection}
                        />
                    )}


                    {/* =================================================
                       BOOK APPOINTMENT
                    ================================================= */}

                    {activeSection === "book-appointment" && (
                        <BookAppointmentContent />
                    )}


                    {/* =================================================
                       MY APPOINTMENTS
                    ================================================= */}

                    {activeSection === "appointments" && (
                        <AppointmentsContent />
                    )}


                    {/* =================================================
                       SERVICES
                    ================================================= */}

                    {activeSection === "services" && (
                        <ServicesContent
                            setActiveSection={setActiveSection}
                        />
                    )}


                    {/* =================================================
                       BOOKING HISTORY
                    ================================================= */}

                    {activeSection === "history" && (
                        <BookingHistoryContent />
                    )}


                    {/* =================================================
                       MEMBERSHIP
                    ================================================= */}

                    {activeSection === "membership" && (
                        <MembershipContent />
                    )}


                    {/* =================================================
                       PROFILE
                    ================================================= */}

                    {activeSection === "profile" && (
                        <ProfileContent />
                    )}

                </main>

            </div>

        </div>
    );
}


/* =========================================================
   DASHBOARD CONTENT
========================================================= */

function DashboardContent({ setActiveSection }) {

    return (
        <>

            <section className="welcome-section">

                <h1>
                    Welcome back, User 👋
                </h1>

                <p>z
                    Here's what's happening with your salon appointments.
                </p>

            </section>


            {/* STAT CARDS */}

            <div className="summary-cards">


                <div className="summary-card">

                    <div className="card-icon">
                        📅
                    </div>

                    <div>

                        <p>
                            Upcoming Appointment
                        </p>

                        <h3>
                            1
                        </h3>

                    </div>

                </div>


                <div className="summary-card">

                    <div className="card-icon">
                        ✂
                    </div>

                    <div>

                        <p>
                            Total Visits
                        </p>

                        <h3>
                            12
                        </h3>

                    </div>

                </div>


                <div className="summary-card">

                    <div className="card-icon">
                        ★
                    </div>

                    <div>

                        <p>
                            Membership
                        </p>

                        <h3>
                            Active
                        </h3>

                    </div>

                </div>


                <div className="summary-card">

                    <div className="card-icon">
                        🎁
                    </div>

                    <div>

                        <p>
                            Reward Points
                        </p>

                        <h3>
                            250
                        </h3>

                    </div>

                </div>

            </div>


            {/* LOWER SECTION */}

            <section className="bottom-section">


                {/* UPCOMING APPOINTMENT */}

                <div className="dashboard-card">

                    <div className="section-header">

                        <div>

                            <h2>
                                Upcoming Appointment
                            </h2>

                            <p>
                                Your next salon appointment
                            </p>

                        </div>

                    </div>


                    <div className="upcoming-appointment">

                        <div className="appointment-date">

                            <strong>
                                25
                            </strong>

                            <span>
                                SEP
                            </span>

                        </div>


                        <div className="appointment-details">

                            <h3>
                                Hair Cut
                            </h3>

                            <p>
                                10:00 AM
                            </p>

                            <p>
                                with Amit
                            </p>

                        </div>


                        <span className="appointment-status">
                            Confirmed
                        </span>

                    </div>

                </div>


                {/* QUICK ACTIONS */}

                <div className="dashboard-card quick-actions-card">

                    <h2>
                        Quick Actions
                    </h2>


                    <button
                        className="action-button"
                        onClick={() =>
                            setActiveSection("book-appointment")
                        }
                    >

                        <span className="action-icon">
                            📅
                        </span>

                        <span>
                            Book Appointment
                        </span>

                        <span className="action-arrow">
                            ›
                        </span>

                    </button>


                    <button
                        className="action-button"
                        onClick={() =>
                            setActiveSection("services")
                        }
                    >

                        <span className="action-icon">
                            ✂
                        </span>

                        <span>
                            View Services
                        </span>

                        <span className="action-arrow">
                            ›
                        </span>

                    </button>


                    <button
                        className="action-button"
                        onClick={() =>
                            setActiveSection("history")
                        }
                    >

                        <span className="action-icon">
                            ▤
                        </span>

                        <span>
                            Booking History
                        </span>

                        <span className="action-arrow">
                            ›
                        </span>

                    </button>

                </div>

            </section>

        </>
    );
}


/* =========================================================
   BOOK APPOINTMENT
========================================================= */

function BookAppointmentContent() {

    return (
        <section className="page-section">


            <div className="page-heading">

                <div>

                    <h1>
                        Book Appointment
                    </h1>

                    <p>
                        Schedule your next salon appointment.
                    </p>

                </div>

            </div>


            <div className="dashboard-card appointment-form-card">


                <div className="form-group">

                    <label>
                        Select Service
                    </label>

                    <select>

                        <option>
                            Select a service
                        </option>

                        <option>
                            Hair Cut - ₹300
                        </option>

                        <option>
                            Hair Spa - ₹700
                        </option>

                        <option>
                            Hair Coloring - ₹1200
                        </option>

                        <option>
                            Facial - ₹800
                        </option>

                        <option>
                            Makeup - ₹1500
                        </option>

                        <option>
                            Manicure / Pedicure - ₹600
                        </option>

                    </select>

                </div>


                <div className="form-group">

                    <label>
                        Select Employee
                    </label>

                    <select>

                        <option>
                            Select employee
                        </option>

                        <option>
                            Amit - Hair Stylist
                        </option>

                        <option>
                            Neha - Beautician
                        </option>

                        <option>
                            Riya - Makeup Artist
                        </option>

                    </select>

                </div>


                <div className="form-row">

                    <div className="form-group">

                        <label>
                            Select Date
                        </label>

                        <input
                            type="date"
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Select Time
                        </label>

                        <select>

                            <option>
                                Select time
                            </option>

                            <option>
                                10:00 AM
                            </option>

                            <option>
                                11:00 AM
                            </option>

                            <option>
                                12:00 PM
                            </option>

                            <option>
                                02:00 PM
                            </option>

                            <option>
                                04:00 PM
                            </option>

                            <option>
                                06:00 PM
                            </option>

                        </select>

                    </div>

                </div>


                <button className="primary-button">

                    Book Appointment

                </button>

            </div>

        </section>
    );
}


/* =========================================================
   MY APPOINTMENTS
========================================================= */

function AppointmentsContent() {

    return (
        <section className="page-section">


            <div className="page-heading">

                <div>

                    <h1>
                        My Appointments
                    </h1>

                    <p>
                        View your upcoming appointments.
                    </p>

                </div>


                <button
                    className="primary-button"
                >
                    + Book Appointment
                </button>

            </div>


            <div className="dashboard-card table-card">


                <div className="table-header">

                    <span>
                        Date
                    </span>

                    <span>
                        Time
                    </span>

                    <span>
                        Service
                    </span>

                    <span>
                        Employee
                    </span>

                    <span>
                        Status
                    </span>

                </div>


                <div className="table-row">

                    <span>
                        25 Sep 2026
                    </span>

                    <span>
                        10:00 AM
                    </span>

                    <span>
                        Hair Cut
                    </span>

                    <span>
                        Amit
                    </span>

                    <span className="status confirmed">
                        Confirmed
                    </span>

                </div>


                <div className="table-row">

                    <span>
                        30 Sep 2026
                    </span>

                    <span>
                        02:00 PM
                    </span>

                    <span>
                        Facial
                    </span>

                    <span>
                        Neha
                    </span>

                    <span className="status pending">
                        Pending
                    </span>

                </div>

            </div>

        </section>
    );
}


/* =========================================================
   SERVICES
========================================================= */

function ServicesContent({ setActiveSection }) {

    const services = [

        {
            name: "Hair Cut",
            description:
                "Professional haircut tailored to your style.",
            price: "₹300",
        },

        {
            name: "Hair Spa",
            description:
                "Relaxing and refreshing hair spa treatment.",
            price: "₹700",
        },

        {
            name: "Hair Coloring",
            description:
                "Fresh and vibrant hair coloring service.",
            price: "₹1200",
        },

        {
            name: "Facial",
            description:
                "Refresh and nourish your skin.",
            price: "₹800",
        },

        {
            name: "Makeup",
            description:
                "Professional makeup for special occasions.",
            price: "₹1500",
        },

        {
            name: "Manicure / Pedicure",
            description:
                "Complete care for your hands, feet and nails.",
            price: "₹600",
        },

    ];


    return (
        <section className="page-section">


            <div className="page-heading">

                <div>

                    <h1>
                        Services
                    </h1>

                    <p>
                        Explore our salon services.
                    </p>

                </div>

            </div>


            <div className="service-grid">

                {services.map((service) => (

                    <div
                        className="service-card"
                        key={service.name}
                    >

                        <div className="service-icon">
                            ✂
                        </div>


                        <h3>
                            {service.name}
                        </h3>


                        <p>
                            {service.description}
                        </p>


                        <strong>
                            {service.price}
                        </strong>


                        <button
                            className="primary-button"
                            onClick={() =>
                                setActiveSection(
                                    "book-appointment"
                                )
                            }
                        >
                            Book Now
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
}


/* =========================================================
   BOOKING HISTORY
========================================================= */

function BookingHistoryContent() {

    return (
        <section className="page-section">


            <div className="page-heading">

                <div>

                    <h1>
                        Booking History
                    </h1>

                    <p>
                        View your previous salon appointments.
                    </p>

                </div>

            </div>


            <div className="dashboard-card table-card">


                <div className="table-header">

                    <span>
                        Date
                    </span>

                    <span>
                        Service
                    </span>

                    <span>
                        Employee
                    </span>

                    <span>
                        Amount
                    </span>

                    <span>
                        Status
                    </span>

                </div>


                <div className="table-row">

                    <span>
                        15 Sep 2026
                    </span>

                    <span>
                        Hair Spa
                    </span>

                    <span>
                        Amit
                    </span>

                    <span>
                        ₹700
                    </span>

                    <span className="status confirmed">
                        Completed
                    </span>

                </div>


                <div className="table-row">

                    <span>
                        05 Sep 2026
                    </span>

                    <span>
                        Facial
                    </span>

                    <span>
                        Neha
                    </span>

                    <span>
                        ₹800
                    </span>

                    <span className="status confirmed">
                        Completed
                    </span>

                </div>


                <div className="table-row">

                    <span>
                        25 Aug 2026
                    </span>

                    <span>
                        Hair Cut
                    </span>

                    <span>
                        Amit
                    </span>

                    <span>
                        ₹300
                    </span>

                    <span className="status confirmed">
                        Completed
                    </span>

                </div>

            </div>

        </section>
    );
}


/* =========================================================
   MEMBERSHIP
========================================================= */

function MembershipContent() {

    return (
        <section className="page-section">


            <div className="page-heading">

                <div>

                    <h1>
                        Membership
                    </h1>

                    <p>
                        Manage your R K Salon membership.
                    </p>

                </div>

            </div>


            <div className="dashboard-card membership-card">


                <div>

                    <p>
                        Current Membership
                    </p>

                    <h2>
                        Premium Membership
                    </h2>

                    <span className="membership-status">
                        Active
                    </span>

                </div>


                <div className="membership-details">


                    <div>

                        <strong>
                            25%
                        </strong>

                        <p>
                            Discount
                        </p>

                    </div>


                    <div>

                        <strong>
                            250
                        </strong>

                        <p>
                            Reward Points
                        </p>

                    </div>


                    <div>

                        <strong>
                            30 Sep
                        </strong>

                        <p>
                            Valid Until
                        </p>

                    </div>


                </div>

            </div>

        </section>
    );
}


/* =========================================================
   PROFILE
========================================================= */

function ProfileContent() {

    return (
        <section className="page-section">


            <div className="page-heading">

                <div>

                    <h1>
                        My Profile
                    </h1>

                    <p>
                        Manage your personal information.
                    </p>

                </div>

            </div>


            <div className="dashboard-card profile-card">


                <div className="form-group">

                    <label>
                        Full Name
                    </label>

                    <input
                        type="text"
                        value="Rahul Sharma"
                        readOnly
                    />

                </div>


                <div className="form-group">

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        value="rahul@gmail.com"
                        readOnly
                    />

                </div>


                <div className="form-group">

                    <label>
                        Phone
                    </label>

                    <input
                        type="text"
                        value="9876543210"
                        readOnly
                    />

                </div>


                <div className="form-group">

                    <label>
                        Address
                    </label>

                    <textarea
                        rows="3"
                        value="Ahmedabad, Gujarat"
                        readOnly
                    />

                </div>


                <button className="primary-button">
                    Edit Profile
                </button>

            </div>

        </section>
    );
}


export default UserDashboard;