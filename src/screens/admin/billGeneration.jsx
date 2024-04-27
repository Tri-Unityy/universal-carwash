import React, { useState } from "react";
//import { saveAs } from 'file-saver'; // For downloading files

function BillGeneration() {
  const [formData, setFormData] = useState({
    bookingNo: "",
    vehicleNo: "",
    vehicleType: "",
    clientName: "", 
    serviceDate: "", 
    address: "", 
    phone: "", 
    services: [{ service: "", rate: "", discount: "" }],
  });
  
  const [generatedBill, setGeneratedBill] = useState("");
  const [displayData, setDisplayData] = useState(false);

  const handleCalculateTotal = () => {
    let total = 0;
    formData.services.forEach((service) => {
      const rate = parseFloat(service.rate) || 0;
      const discount = parseFloat(service.discount) || 0;
      total += rate - discount;
    });
    return total.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    
    // Check for null values and set them to empty string
    for (const key in updatedFormData) {
      if (typeof updatedFormData[key] === "object" && updatedFormData[key] !== null) {
        updatedFormData[key] = updatedFormData[key].map((service) => ({
          ...service,
          service: service.service || "",
          rate: service.rate || "",
          discount: service.discount || "",
        }));
      } else {
        updatedFormData[key] = updatedFormData[key] || "";
      }
    }
  
    setFormData(updatedFormData);
    const total = handleCalculateTotal(updatedFormData);
    const generatedBillContent = generateBill({ ...updatedFormData, total });
    setGeneratedBill(generatedBillContent);
    setDisplayData(true);
  };
  
  const generateBill = (data) => {
    let billContent = `
      Booking No: ${data.bookingNo}
      Vehicle No: ${data.vehicleNo}
      Vehicle Type: ${data.vehicleType}
      Client Name: ${data.clientName} 
      Service Date: ${data.serviceDate} 
      Address: ${data.address} 
      Phone: ${data.phone} 
      `;
    data.services.forEach((service, index) => {
      billContent += `
      Service ${index + 1}: ${service.service}
      Rate: ${service.rate}
      Discount: ${service.discount}
      `;
    });
    billContent += `Total: ${data.total}`;
    return billContent;
  };


  const handleServiceChange = (e, index, fieldName) => {
    const { value } = e.target;
    const updatedServices = [...formData.services];
    updatedServices[index][fieldName] = value;
    setFormData({ ...formData, services: updatedServices });
  };
  

  const handleAddService = () => {
    setFormData({
      ...formData,
      services: [...formData.services, { service: "", rate: "", discount: "" }],
    });
  };

  const isAnyFieldEmpty = Object.values(formData).some((value) => {
    if (Array.isArray(value)) {
      return value.some((item) => Object.values(item).some((val) => val === ""));
    }
    return value === "";
  });
  const inputStyle = {
    width: "100px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    paddingLeft: "5px",
    color:'black'
  };
  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    paddingTop: 20,
    
  };

  const buttonStyle = {
    width: "200px",
    height: "50px",
    borderRadius: "10px",
    marginBottom: "20px",
    color: "white",
  };

  const generateBillButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e80c10",
    marginRight: "20px",
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: "black",
    marginLeft: "20px",
    marginRight: "20px",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#5303ff91",
  };

  return (
    <div
      style={{
        width: "100%",
        flex:1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:'#dfecea'
      }}
    >
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Generate Bill</h2>
        <form
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }}
>
 
<div style={{display:'flex',flexDirection:'row',flex:1 }}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'center',paddingRight:20}}>
      <label style={{height:30}} htmlFor="bookingNo">Booking No:</label>
      <label style={{height:30}} htmlFor="vehicleNo">Vehicle No:</label>
      <label style={{height:30}} htmlFor="vehicleType">Vehicle Type:</label>
      <label style={{height:30}} htmlFor="clientName">Client Name:</label>
      <label style={{height:30}} htmlFor="serviceDate">Service Date:</label>
      <label style={{height:30}} htmlFor="address">Address:</label>
      <label style={{height:30}} htmlFor="phone">Phone:</label>
    </div>

    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center' }}>
      <div style={{height:30}}>
      <input
        type="text"
        id="bookingNo"
        name="bookingNo"
        value={formData.bookingNo}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, bookingNo: e.target.value })}
      />
      </div>
      <div style={{height:30}}>
      <input
        type="text"
        id="vehicleNo"
        name="vehicleNo"
        value={formData.vehicleNo}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, vehicleNo: e.target.value })}
      /></div>
       <div style={{height:30}}>
      <input
        type="text"
        id="vehicleType"
        name="vehicleType"
        value={formData.vehicleType}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
      /></div>
             <div style={{height:30}}>
      <input
        type="text"
        id="clientName"
        name="clientName"
        value={formData.clientName}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
      /></div>
             <div style={{height:30}}>
      <input
        type="text"
        id="serviceDate"
        name="serviceDate"
        value={formData.serviceDate}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
      /></div>
             <div style={{height:30}}>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      /></div>
                   <div style={{height:30}}>
      <input
        type="number"
        id="phone"
        name="phone"
        value={formData.phone}
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      /></div>
    </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", flex: 1, marginBottom: "10px" }}>
            {formData.services.map((service, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", paddingRight: 20 }}>
                  <label style={{ height: 30 }} htmlFor={`service${index}`}>Service {index + 1}:</label>
                  <label style={{ height: 30 }} htmlFor={`rate${index}`}>Rate:</label>
                  <label style={{ height: 30 }} htmlFor={`discount${index}`}>Discount:</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                  <div style={{ height: 30 }}>
                    <input type="text" id={`service${index}`} name={`service${index}`} value={service.service} onChange={(e) => handleServiceChange(e, index, 'service')} style={inputStyle} />
                  </div>
                  <div style={{ height: 30 }}>
                    <input type="number" id={`rate${index}`} name={`rate${index}`} value={service.rate}  min="0" title="Please enter a valid number" onChange={(e) => handleServiceChange(e, index, 'rate')} style={inputStyle } />
                  </div>
                  <div style={{ height: 30 }}>
                    <input type="number" id={`discount${index}`} name={`discount${index}`} value={service.discount}  title="Please enter a valid number" onChange={(e) => handleServiceChange(e, index, 'discount')} style={inputStyle } />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
          style={buttonContainerStyle}
        >
          <button
            style={generateBillButtonStyle}
            type="button"
            onClick={handleAddService}
          >
            Add Another Service
          </button>
          <button
            style={addButtonStyle}
            type="submit"
            disabled={isAnyFieldEmpty}
          >
            Generate Bill
          </button>
          <button
            style={resetButtonStyle}
            onClick={() => {
              setFormData({
                bookingNo: "",
                vehicleNo: "",
                vehicleType: "",
                clientName: "", 
                serviceDate: "", 
                address: "", 
                phone: "", 
                services: [{ service: "", rate: "", discount: "" }],
              });
              setDisplayData(false);
            }}
          >
            Reset Data
          </button>
        </div>
</form>
      </div>
      <div
  style={{
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }}
>
  {displayData && (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Bill</h3>
      <table
        style={{
          borderCollapse: "collapse",
          width: "70%",
          border: "1px solid black",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Booking No:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.bookingNo}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Vehicle No:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.vehicleNo}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Vehicle Type:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.vehicleType}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Client Name:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.clientName}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Service Date:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.serviceDate}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Address:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.address}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Phone:
            </td>
            <td
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.phone}
            </td>
          </tr>
          {formData.services.map((service, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "8px",
                  border: "1px solid white",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Service {index + 1}:
              </td>
              <td
                style={{
                  padding: "8px",
                  border: "1px solid white",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {service.service}
              </td>
              <td
                style={{
                  padding: "8px",
                  border: "1px solid white",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {service.rate}
              </td>
              <td
                style={{
                  padding: "8px",
                  border: "1px solid white",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {service.discount}
              </td>
            </tr>
          ))}
                    <tr>
            <td
              colSpan="2"
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Total:
            </td>
            <td
              colSpan="2"
              style={{
                padding: "8px",
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {formData.services.reduce(
                (total, service) =>
                  total + parseFloat(service.rate) - parseFloat(service.discount),
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
</div>
    </div>
  );
}

export default BillGeneration;
