const EmailTemplate = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.</p>
    <button>
      <a href="https://www.google.com">Click me</a>
    </button>
  </div>
);

export default EmailTemplate;