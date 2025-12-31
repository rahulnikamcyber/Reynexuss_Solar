export default function LeadForm() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "600px" }}>
      <h1>Customer Lead Form</h1>

      <form>
        <label>
          Full Name
          <br />
          <input type="text" placeholder="Enter full name" />
        </label>

        <br /><br />

        <label>
          Mobile Number
          <br />
          <input type="tel" placeholder="Enter mobile number" />
        </label>

        <br /><br />

        <label>
          City
          <br />
          <input type="text" placeholder="Enter city" />
        </label>

        <br /><br />

        <label>
          Service Type
          <br />
          <select>
            <option>Solar Installation</option>
            <option>Solar Maintenance</option>
            <option>Electrical Services</option>
            <option>Solar Cleaning</option>
          </select>
        </label>

        <br /><br />

        <label>
          Budget
          <br />
          <input type="text" placeholder="Enter budget" />
        </label>

        <br /><br />

        <label>
          Notes
          <br />
          <textarea placeholder="Additional notes"></textarea>
        </label>

        <br /><br />

        <button type="submit">Submit Lead</button>
      </form>
    </main>
  );
  }
  
