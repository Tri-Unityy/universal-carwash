import React, { useState } from 'react';
//import { saveAs } from 'file-saver'; // For downloading files

function BillGeneration() {
  const [formData, setFormData] = useState({
    bookingNo: '',
    vehicleNo: '',
    vehicleType: '',
    services: '',
    rate: '',
    discount: ''
  });
  const [generatedBill, setGeneratedBill] = useState('');
  const [displayData, setDisplayData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedBillContent = generateBill(formData);
    setGeneratedBill(generatedBillContent);
    setDisplayData(true);
  };

  const generateBill = (data) => {
    return `
      Booking No: ${data.bookingNo}
      Vehicle No: ${data.vehicleNo}
      Vehicle Type: ${data.vehicleType}
      Services: ${data.services}
      Rate: ${data.rate}
      Discount: ${data.discount}
      Total: ${data.total}
    `;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rate' || name === 'discount') {
      if (!isNaN(value)) {
      const rate = parseFloat(formData.rate) || 0;
      const discount = parseFloat(formData.discount) || 0;
      const total = (rate - discount);
      setFormData({ ...formData, [name]: value, total: total });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isAnyFieldEmpty = Object.values(formData).some(value => value === '');

  return (
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h2>Generate Bill</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
      <label style={{marginRight:20}} htmlFor="bookingNo">Booking No:</label>
          <input
            type="text"
            id="bookingNo"
            name="bookingNo"
            value={formData.bookingNo}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{marginRight:20}}  htmlFor="vehicleNo">Vehicle No:</label>
          <input
            type="text"
            id="vehicleNo"
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
  <label style={{marginRight:20}}  htmlFor="vehicleType">Vehicle Type:</label>
  <input
    type="text"
    id="vehicleType"
    name="vehicleType"
    value={formData.vehicleType}
    onChange={handleChange}
  />
</div>
<div style={{ marginBottom: '10px' }}>
  <label style={{marginRight:20}}  htmlFor="services">Services:</label>
  <input
    type="text"
    id="services"
    name="services"
    value={formData.services}
    onChange={handleChange}
  />
</div>
<div style={{ marginBottom: '10px' }}>
  <label style={{ marginRight: '20px' }} htmlFor="rate">Rate:</label>
  <input
    type="number"
    id="rate"
    name="rate"
    value={formData.rate}
    onChange={handleChange}
    min="0"
    title="Please enter a valid number"
    style={{ width: '100px', marginLeft: '10px' }}
  />
</div>
<div style={{ marginBottom: '10px' }}>
  <label style={{ marginRight: '20px' }} htmlFor="discount">Discount:</label>
  <input
    type="number"
    id="discount"
    name="discount"
    value={formData.discount}
    onChange={handleChange}
    title="Please enter a valid number"
    style={{ width: '100px', marginLeft: '10px' }}
  />
</div>

        <button style={{width:200,height:50,marginTop:50}} type="submit" disabled={isAnyFieldEmpty}>Generate Bill</button>
      </form>
      {displayData && (
        <div style={{ marginTop: '30px' }}>
        <h3>Bill</h3>
        <table style={{ borderCollapse: 'collapse', width: '70%', border: '1px solid black' }}>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key} style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '8px', borderRight: '1px solid black' }}>{key}</td>
                <td style={{ padding: '8px' }}>{value}</td>
              </tr>       
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}

export default BillGeneration;
