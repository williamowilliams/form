import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const App = () => {

const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        department: '',
        supervisor: '',
        date: '',
        dateNeeded: '',
        revision: '',
        model: '',
        hardwareList: '',
        softwareList: '',
        partNumber: '',
        partNumber2: '',
        partNumber3: '',
        critical: '',

    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
});

return (
    <div className="app">
    <h1>Engineering Change Request</h1>
    <form className="form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input 
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        <label htmlFor="name">Name</label>
        <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
        />
        <label htmlFor="department">Department</label>
        <input
            id="department"
            name="department"
            type="text" 
            onChange={formik.handleChange}
            value={formik.values.department} 
        />
        <label htmlFor="supervisor">Supervisor</label>
        <input
            id="supervisor"
            name="supervisor"
            type="text" 
            onChange={formik.handleChange}
            value={formik.values.supervisor} 
        />
        <label htmlFor="date">Today's Date</label>
        <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
        />
        <label htmlFor="dateNeeded">Date Needed By</label>
        <input 
            id="dateNeeded"
            name="dateNeeded"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dateNeeded}
        />
        <label htmlFor="revision">Revision</label>
        <input 
            id="revision"
            name="revision"
            type="text" 
            onChange={formik.handleChange}
            value={formik.values.revision}
        />
        <label htmlFor="hardwareList">Hardware Product Type</label>
        <select 
            id="hardwareList"
            name="hardwareList"
            type="text"
            size="1"
            onChange={formik.handleChange}
            value={formik.values.hardwareList}
        >
                <option value = "1">--Select--</option>
                <option value = "2">BOC's & Add-in Cards</option>
                <option value = "3">Cables</option>
                <option value = "4">Cash Drawers M23XX</option>
                <option value = "5">Components</option>
                <option value = "6">Counter Top Player Terminal</option>
                <option value = "7">Customer Displays</option>
                <option value = "8">EverServ 2 Series M81XX</option>
                <option value = "9">EverServ 6 Series M71XX</option>
                <option value = "10">Gemini M5050-XX</option>
                <option value = "11">Hard Drives</option>
                <option value = "12">Hardware</option>
                <option value = "13">Switches or Routers</option>
                <option value = "14">Kiosk</option>
                <option value = "15">Links M55xx</option>
                <option value = "16">LMS</option>
                <option value = "17">M424X</option>
                <option value = "18">M425X</option>
                <option value = "19">M4850 Zero Client</option>
                <option value = "20">M5000 / M5002</option>
                <option value = "21">M500X</option>
                <option value = "22">M5100</option>
                <option value = "23">M5150</option>
                <option value = "24">M600X</option>
                <option value = "25">M6150</option>
                <option value = "26">M72xx</option>
                <option value = "27">M8935-TMD</option>
                <option value = "28">M897x Tablet</option>
                <option value = "29">M8984-OX</option>
                <option value = "30">Mag Stripe/Barcode Readers</option>
                <option value = "31">Manual</option>
                <option value = "32">Memory</option>
                <option value = "33">Modems</option>
                <option value = "34">Monitors</option>
                <option value = "35">Other</option>
                <option value = "36">POS 2</option>
                <option value = "37">POS 3</option>
                <option value = "38">POS 4</option>
                <option value = "39">POS 7</option>
                <option value = "40">Power Supply - M35XX</option>
                <option value = "41">Printer</option>
                <option value = "42">Software</option>
                <option value = "43">T80xx</option>
                <option value = "45">T8110</option>
                <option value = "46">T8115</option>
                <option value = "47">T8120</option>
                <option value = "48">T8310</option>
                <option value = "49">T8315</option>
                <option value = "50">T8320</option>
                <option value = "51">T850</option>
                <option value = "52">T8510</option>
                <option value = "53">T8515</option>
                <option value = "54">T8520</option>
        </select>
        <label htmlFor="softwareList">Software Product Type</label>
        <select 
            id="softwareList"
            name="softwareList"
            type="text"
            size="1"
            onChange={formik.handleChange}
            value={formik.values.softwareList}
        >
                <option value = "1">--Select--</option>
                <option value = "3rd Party">3rd Party</option>
                <option value = "BIOS">BIOS</option>
                <option value = "BOC">BOC</option>
                <option value = "Customer Image">Customer Image</option>
                <option value = "Diagnostics">Diagnostics</option>
                <option value = "Disk Image">Disk Image</option>
                <option value = "GT/Exalt">GT/Exalt</option>
                <option value = "Infusion/Heritage">Infusion/Heritage</option>
                <option value = "InTouch/Inform">InTouch/Inform</option>
                <option value = "Manuals">Manuals</option>
                <option value = "Operating Systems">Operating Systems</option>
                <option value = "PC POS">PC POS</option>
                <option value = "PixelPoint">PixelPoint</option>
                <option value = "POS Ready 7">POS Ready 7</option>
                <option value = "Siva">Siva</option>
                <option value = "SureCheck">SureCheck</option>
                <option value = "Utility">Utility</option>
                <option value = "Windows 10 2015">Windows 10 2015</option>
                <option value = "Windows 10 2016">Windows 10 2016</option>
                <option value = "Windows 2000">Windows 2000</option>
                <option value = "Windows 7">Windows 7</option>
                <option value = "Windows 8.1">Windows 8.1</option>
                <option value = "Windows 9x">Windows 9x</option>
                <option value = "Windows NT">Windows NT</option>
                <option value = "Windows XP">Windows XP</option>
        </select>

        <label htmlFor="model">Model</label>
        <input
            id="model"
            name="model"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.model} 
        />
    
        <label htmlFor="partnumber">Part Number</label>
        <input
            id="partnumber"
            name="partnumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.partNumber}
        />
    
        <label htmlFor="partnumber2">Part Number 2</label>
        <input
            id="partnumber2"
            name="partnumber2"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.partNumber2}
        />
    
        <label htmlFor="partnumber3">Part Number 3</label>
        <input
            id="partnumber3"
            name="partnumber3"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.partNumber3}
        />
        
        
        <label htmlFor="description">Description of Problem</label>
        <textarea 
            id="description" 
            rows="10" 
            cols="30"
        ></textarea>
    
    
        <label htmlFor="solution">Proposed Solution</label>
        <textarea 
            id="solution" 
            rows="10"
        ></textarea>
    
        <label htmlFor="critical">Mission Critical</label>
        <input
            id="critical"
            name="critical"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.critical}
        />
        
      <button type="submit">Submit</button>

    </form>
    </div>
  );
};
export default App