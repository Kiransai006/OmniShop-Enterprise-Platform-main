import React from 'react';

const StatCard = ({ title, value, change, icon }) => (
    <div className="stat-card">
        <div className="stat-icon">{icon}</div>
        <div className="stat-info">
            <h3>{title}</h3>
            <p className="stat-value">{value}</p>
            <p className={`stat-change ${change >= 0 ? 'positive' : 'negative'}`}>
                {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
            </p>
        </div>
    </div>
);

const Dashboard = ({ orderData, productData }) => {
    return (
        <div className="dashboard-view">
            <section className="dashboard-intro">
                <div>
                    <p className="eyebrow">OVERVIEW</p>
                    <h1>Store overview</h1>
                    <p className="intro-copy">A quick look at your store performance and connected services.</p>
                </div>
                <div className="overview-note"><span aria-hidden="true">✦</span> Your business at a glance</div>
            </section>

            <div className="stats-grid">
                <StatCard title="Total Revenue" value="$45,231.89" change={20.1} icon="💰" />
                <StatCard title="Active Orders" value="356" change={-5.4} icon="📦" />
                <StatCard title="Total Products" value="1,205" change={12.5} icon="🏷️" />
                <StatCard title="System Status" value="Operational" change={0} icon="✅" />
            </div>

            <section className="content-grid">
                <div className="card service-status">
                    <div className="card-heading">
                        <div>
                            <p className="eyebrow">PLATFORM</p>
                            <h3>Service health</h3>
                        </div>
                        <span className="health-summary"><span aria-hidden="true" />Live checks</span>
                    </div>
                    <div className="status-item">
                        <div className="service-name">
                            <span className="service-icon">📦</span>
                            <div><span>Order service</span><small>Order processing and fulfillment</small></div>
                        </div>
                        <span className={`status-badge ${orderData ? 'active' : 'inactive'}`}>
                            {orderData ? 'Online' : 'Offline'}
                        </span>
                    </div>
                    <div className="status-item">
                        <div className="service-name">
                            <span className="service-icon">🏷️</span>
                            <div><span>Product service</span><small>Catalog and inventory updates</small></div>
                        </div>
                        <span className={`status-badge ${productData ? 'active' : 'inactive'}`}>
                            {productData ? 'Online' : 'Offline'}
                        </span>
                    </div>
                    <div className="message-box">
                        <p><strong>Order service:</strong> {orderData?.message || 'No data available'}</p>
                        <p><strong>Product service:</strong> {productData?.message || 'No data available'}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
