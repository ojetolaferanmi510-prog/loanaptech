import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <h1>Welcome to LoanAptech</h1>
        <p>
          Get instant personal loans up to $10,000 with low interest rates and
          flexible repayment options.
        </p>
        <a className="apply-btn" href="/apply">Apply Now, It's Free</a>
      </section>

      <section className="home-features" aria-label="Loan benefits">
        <article className="home-card">
          <h2>Lightning<br />Fast</h2>
          <h3>Lightning Fast Approval</h3>
          <p>Get decision in under 10 minutes</p>
        </article>

        <article className="home-card">
          <h2>No<br />Paperwork</h2>
          <h3>No Paperwork Required</h3>
          <p>100% digital &amp; hassle-free process</p>
        </article>

        <article className="home-card">
          <h2>Best<br />Rates</h2>
          <h3>Lowest Interest Rates</h3>
          <p>Starting from just 8.99% p.a.</p>
        </article>
      </section>

      <p className="home-status">
        Already applied? <a href="/status">Check Loan Status</a> - <a href="/dashboard">Go to Dashboard</a>
      </p>
    </main>
  );
}

export default Home;