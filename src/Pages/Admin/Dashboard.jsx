import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function AdminDashboard() {
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
            id: "customers",
            label: "Customers",
            icon: "♙",
        },
        {
            id: "appointments",
            label: "Appointments",
            icon: "▣",
        },
        {
            id: "services",
            label: "Services",
            icon: "✂",
        },
        {
            id: "employees",
            label: "Employees",
            icon: "♙",
        },
        {
            id: "billing",
            label: "Billing",
            icon: "▤",
        },
        {
            id: "inventory",
            label: "Inventory",
            icon: "▣",
        },
        {
            id: "reports",
            label: "Reports",
            icon: "▥",
        },
    ];

    return (
        <div className="dashboard">

            {/* ================= HEADER ================= */}
            <header className="top-header">

                <div className="logo">
                   RK <span> SALON</span>
                </div>

                <div className="admin-area">
                    <span className="notification">🔔</span>
                    <span className="admin-name">Admin</span>
                    <span className="arrow">▼</span>
                </div>

            </header>

            {/* ================= BODY ================= */}
            <div className="dashboard-body">

                {/* ================= SIDEBAR ================= */}
                <aside className="sidebar">

                    <nav className="sidebar-menu">

                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                className={`menu-item ${activeSection === item.id ? "active" : ""
                                    }`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                <span className="menu-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}

                        {/* Logout */}
                        <button
                            className="menu-item logout"
                            onClick={handleLogout}
                        >
                            <span className="menu-icon">↪</span>
                            <span>Logout</span>
                        </button>

                    </nav>

                </aside>

                {/* ================= MAIN CONTENT ================= */}
                <main className="main-content">

                    {/* DASHBOARD */}
                    {activeSection === "dashboard" && (
                        <DashboardContent setActiveSection={setActiveSection} />
                    )}

                    {/* CUSTOMERS */}
                    {activeSection === "customers" && (
                        <CustomersContent />
                    )}

                    {/* APPOINTMENTS */}
                    {activeSection === "appointments" && (
                        <AppointmentsContent />
                    )}

                    {/* SERVICES */}
                    {activeSection === "services" && (
                        <ServicesContent />
                    )}

                    {/* EMPLOYEES */}
                    {activeSection === "employees" && (
                        <EmployeesContent />
                    )}

                    {/* BILLING */}
                    {activeSection === "billing" && (
                        <BillingContent />
                    )}

                    {/* INVENTORY */}
                    {activeSection === "inventory" && (
                        <InventoryContent />
                    )}

                    {/* REPORTS */}
                    {activeSection === "reports" && (
                        <ReportsContent />
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
                <h1>Welcome back, Admin 👋</h1>
                <p>Here's what's happening today.</p>
            </section>

            {/* STAT CARDS */}
                      <div className="summary-cards">

            <div className="summary-card">

              <div className="card-icon">
                👥
              </div>

              <div>
                <p>Total Customers</p>
                <h3>120</h3>
              </div>

            </div>


            <div className="summary-card">

              <div className="card-icon">
                📅
              </div>

              <div>
                <p>Appointments</p>
                <h3>24</h3>
              </div>

            </div>


            <div className="summary-card">

              <div className="card-icon">
                👨‍💼
              </div>

              <div>
                <p>Employees</p>
                <h3>12</h3>
              </div>

            </div>


            <div className="summary-card">

              <div className="card-icon">
                ₹
              </div>

              <div>
                <p>Today's Revenue</p>
                <h3>₹45,000</h3>
              </div>

            </div>

          </div>


            {/* LOWER SECTION */}
            <section className="bottom-section">

                {/* Today's Appointments */}
                <div className="dashboard-card appointments-card">

                    
              <div className="section-header">

                <div>
                  <h2>Today's Appointments</h2>
                  <p>Upcoming appointments for today</p>
                </div>


              </div>

                    <div className="appointment-header">
                        <span>Time</span>
                        <span>Customer</span>
                        <span>Service</span>
                    </div>

                    <div className="appointment-row">
                        <span>10:00</span>
                        <span>Rahul</span>
                        <span>Haircut</span>
                    </div>

                    <div className="appointment-row">
                        <span>11:30</span>
                        <span>Priya</span>
                        <span>Facial</span>
                    </div>

                    <div className="appointment-row">
                        <span>01:00</span>
                        <span>Amit</span>
                        <span>Hair Spa</span>
                    </div>

                </div>

                {/* Quick Actions */}
                <div className="dashboard-card quick-actions-card">

                    <h2>Quick Actions</h2>

                    <button
                        className="action-button"
                        onClick={() => setActiveSection("customers")}
                    >
                        <span className="action-icon">♙+</span>
                        <span>Add Customer</span>
                        <span className="action-arrow">›</span>
                    </button>

                    <button
                        className="action-button"
                        onClick={() => setActiveSection("appointments")}
                    >
                        <span className="action-icon">▣</span>
                        <span>Book Appointment</span>
                        <span className="action-arrow">›</span>
                    </button>

                    <button
                        className="action-button"
                        onClick={() => setActiveSection("services")}
                    >
                        <span className="action-icon">✂</span>
                        <span>Add Service</span>
                        <span className="action-arrow">›</span>
                    </button>

                </div>

            </section>
        </>
    );
}


/* =========================================================
   CUSTOMERS
========================================================= */

function CustomersContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Customers</h1>
                    <p>Manage all salon customers.</p>
                </div>

                <button className="primary-button">
                    + Add Customer
                </button>
            </div>

            <div className="dashboard-card table-card">

                <div className="table-header">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Phone</span>
                    <span>Visits</span>
                </div>

                <div className="table-row">
                    <span>Rahul Sharma</span>
                    <span>rahul@gmail.com</span>
                    <span>9876543210</span>
                    <span>8</span>
                </div>

                <div className="table-row">
                    <span>Priya Patel</span>
                    <span>priya@gmail.com</span>
                    <span>9876543211</span>
                    <span>12</span>
                </div>

                <div className="table-row">
                    <span>Amit Shah</span>
                    <span>amit@gmail.com</span>
                    <span>9876543212</span>
                    <span>5</span>
                </div>

            </div>

        </section>
    );
}


/* =========================================================
   APPOINTMENTS
========================================================= */

function AppointmentsContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Appointments</h1>
                    <p>Manage today's and upcoming appointments.</p>
                </div>

                <button className="primary-button">
                    + Book Appointment
                </button>
            </div>

            <div className="dashboard-card table-card">

                <div className="table-header">
                    <span>Time</span>
                    <span>Customer</span>
                    <span>Service</span>
                    <span>Status</span>
                </div>

                <div className="table-row">
                    <span>10:00 AM</span>
                    <span>Rahul</span>
                    <span>Haircut</span>
                    <span className="status confirmed">Confirmed</span>
                </div>

                <div className="table-row">
                    <span>11:30 AM</span>
                    <span>Priya</span>
                    <span>Facial</span>
                    <span className="status pending">Pending</span>
                </div>

                <div className="table-row">
                    <span>01:00 PM</span>
                    <span>Amit</span>
                    <span>Hair Spa</span>
                    <span className="status confirmed">Confirmed</span>
                </div>

            </div>

        </section>
    );
}


/* =========================================================
   SERVICES
========================================================= */

function ServicesContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Services</h1>
                    <p>Manage salon services and pricing.</p>
                </div>

                <button className="primary-button">
                    + Add Service
                </button>
            </div>

            <div className="service-grid">

                <div className="service-card">
                    <h3>Hair Cut</h3>
                    <p>Professional haircut tailored to your style.</p>
                    <strong>₹300</strong>
                </div>

                <div className="service-card">
                    <h3>Hair Spa</h3>
                    <p>Relaxing and refreshing hair spa treatment.</p>
                    <strong>₹700</strong>
                </div>

                <div className="service-card">
                    <h3>Hair Coloring</h3>
                    <p>Fresh and vibrant hair coloring service.</p>
                    <strong>₹1200</strong>
                </div>

                <div className="service-card">
                    <h3>Facial</h3>
                    <p>Refresh and nourish your skin.</p>
                    <strong>₹800</strong>
                </div>

            </div>

        </section>
    );
}


/* =========================================================
   EMPLOYEES
========================================================= */

function EmployeesContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Employees</h1>
                    <p>Manage salon employees and staff.</p>
                </div>

                <button className="primary-button">
                    + Add Employee
                </button>
            </div>

            <div className="dashboard-card table-card">

                <div className="table-header">
                    <span>Name</span>
                    <span>Role</span>
                    <span>Phone</span>
                    <span>Status</span>
                </div>

                <div className="table-row">
                    <span>Neha</span>
                    <span>Hair Stylist</span>
                    <span>9876500011</span>
                    <span className="status confirmed">Active</span>
                </div>

                <div className="table-row">
                    <span>Riya</span>
                    <span>Makeup Artist</span>
                    <span>9876500012</span>
                    <span className="status confirmed">Active</span>
                </div>

                <div className="table-row">
                    <span>Karan</span>
                    <span>Receptionist</span>
                    <span>9876500013</span>
                    <span className="status pending">Leave</span>
                </div>

            </div>

        </section>
    );
}


/* =========================================================
   BILLING
========================================================= */

function BillingContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Billing</h1>
                    <p>Manage salon bills and payments.</p>
                </div>

                <button className="primary-button">
                    + Create Bill
                </button>
            </div>

            <div className="billing-cards">

                <div className="billing-card">
                    <h3>Today's Bills</h3>
                    <strong>18</strong>
                </div>

                <div className="billing-card">
                    <h3>Paid Bills</h3>
                    <strong>15</strong>
                </div>

                <div className="billing-card">
                    <h3>Pending Bills</h3>
                    <strong>3</strong>
                </div>

            </div>

            <div className="dashboard-card table-card">

                <div className="table-header">
                    <span>Bill ID</span>
                    <span>Customer</span>
                    <span>Amount</span>
                    <span>Status</span>
                </div>

                <div className="table-row">
                    <span>#RK001</span>
                    <span>Rahul</span>
                    <span>₹700</span>
                    <span className="status confirmed">Paid</span>
                </div>

                <div className="table-row">
                    <span>#RK002</span>
                    <span>Priya</span>
                    <span>₹800</span>
                    <span className="status pending">Pending</span>
                </div>

            </div>

        </section>
    );
}


/* =========================================================
   INVENTORY
========================================================= */

function InventoryContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Inventory</h1>
                    <p>Manage salon products and stock.</p>
                </div>

                <button className="primary-button">
                    + Add Product
                </button>
            </div>

            <div className="dashboard-card table-card">

                <div className="table-header">
                    <span>Product</span>
                    <span>Category</span>
                    <span>Stock</span>
                    <span>Status</span>
                </div>

                <div className="table-row">
                    <span>Shampoo</span>
                    <span>Hair Care</span>
                    <span>24</span>
                    <span className="status confirmed">Available</span>
                </div>

                <div className="table-row">
                    <span>Hair Mask</span>
                    <span>Hair Care</span>
                    <span>8</span>
                    <span className="status pending">Low Stock</span>
                </div>

                <div className="table-row">
                    <span>Face Cream</span>
                    <span>Skin Care</span>
                    <span>17</span>
                    <span className="status confirmed">Available</span>
                </div>

            </div>

        </section>
    );
}


/* =========================================================
   REPORTS
========================================================= */

function ReportsContent() {
    return (
        <section className="page-section">

            <div className="page-heading">
                <div>
                    <h1>Reports</h1>
                    <p>View salon activity and performance reports.</p>
                </div>
            </div>

            <div className="report-grid">

                <div className="report-card">
                    <h3>Total Customers</h3>
                    <strong>120</strong>
                    <p>Customer records</p>
                </div>

                <div className="report-card">
                    <h3>Appointments</h3>
                    <strong>24</strong>
                    <p>Today's appointments</p>
                </div>

                <div className="report-card">
                    <h3>Services</h3>
                    <strong>6</strong>
                    <p>Available services</p>
                </div>

            </div>

        </section>
    );
}

export default AdminDashboard;