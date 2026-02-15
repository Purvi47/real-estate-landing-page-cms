import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [contents, setContents] = useState([]);

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '1234') {
      setLoggedIn(true);
      fetchContents();
    } else {
      alert('Invalid credentials!');
    }
  };

  const fetchContents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/content');
      setContents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (content) => {
    try {
      await axios.put('http://localhost:5000/api/content', content);
      alert(`${content.section.toUpperCase()} Updated!`);
    } catch (err) {
      alert('Update failed');
    }
  };

  const handleChange = (section, field, value, isExtra = false, faqIdx = null) => {
    setContents(prev => prev.map(c => {
      if (c.section === section) {
        if (faqIdx !== null) {
          const newFaq = [...c.faq];
          newFaq[faqIdx][field] = value;
          return { ...c, faq: newFaq };
        }
        if (isExtra) return { ...c, extraData: { ...c.extraData, [field]: value } };
        return { ...c, [field]: value };
      }
      return c;
    }));
  };

  if (!loggedIn) {
    return (
      <div style={loginWrapper}>
        <div style={loginCard}>
          <h2 style={loginHeader}>Admin Login</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="email" 
              placeholder="admin@gmail.com" 
              style={inputStyle} 
              onChange={e => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="1234" 
              style={inputStyle} 
              onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin} style={loginBtn}>Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={dashboardWrapper}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>UrbanNest Admin Panel</h1>
        <button onClick={() => setLoggedIn(false)} style={logoutBtn}>Logout</button>
      </header>

      <main style={mainContent}>
        <h2 style={{ color: '#244B45' }}>Edit Website Content</h2>
        
        {contents.map(content => (
          <div key={content.section} style={sectionCard}>
            <div style={cardHeader}>
              <span style={sectionTag}>{content.section}</span>
              <button onClick={() => handleUpdate(content)} style={saveBtn}>Update Section</button>
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Section Title</label>
              <input 
                style={inputStyle} 
                value={content.title || ''} 
                onChange={e => handleChange(content.section, 'title', e.target.value)} 
              />
            </div>

            {content.description !== undefined && (
              <div style={inputGroup}>
                <label style={labelStyle}>Main Content</label>
                <textarea 
                  style={{ ...inputStyle, height: '100px', resize: 'vertical' }} 
                  value={content.description || ''} 
                  onChange={e => handleChange(content.section, 'description', e.target.value)} 
                />
              </div>
            )}

            {content.section === 'hero' && content.extraData && (
              <div style={extraGrid}>
                <div style={inputGroup}>
                  <label style={labelStyle}>1 BHK Price</label>
                  <input style={inputStyle} value={content.extraData.unit1NewPrice} onChange={e => handleChange('hero', 'unit1NewPrice', e.target.value, true)} />
                </div>
                <div style={inputGroup}>
                  <label style={labelStyle}>2 BHK Price</label>
                  <input style={inputStyle} value={content.extraData.unit2NewPrice} onChange={e => handleChange('hero', 'unit2NewPrice', e.target.value, true)} />
                </div>
                <div style={{ ...inputGroup, gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Location Address</label>
                  <input style={inputStyle} value={content.extraData.location} onChange={e => handleChange('hero', 'location', e.target.value, true)} />
                </div>
              </div>
            )}

            {content.section === 'faq' && content.faq && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <label style={labelStyle}>Questions & Answers</label>
                {content.faq.map((f, i) => (
                  <div key={i} style={faqRow}>
                    <input style={inputStyle} value={f.question} onChange={e => handleChange('faq', 'question', e.target.value, false, i)} placeholder="Question" />
                    <textarea style={{ ...inputStyle, height: '60px' }} value={f.answer} onChange={e => handleChange('faq', 'answer', e.target.value, false, i)} placeholder="Answer" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

const loginWrapper = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#F4F7F6' };
const loginCard = { background: '#fff', padding: '60px 40px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', textAlign: 'center', width: '100%', maxWidth: '450px' };
const loginHeader = { marginBottom: '40px', fontSize: '28px', fontWeight: '700', color: '#333' };
const loginBtn = { width: '100%', padding: '14px', background: '#244B45', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' };

const dashboardWrapper = { background: '#F9FBFA', minHeight: '100vh', fontFamily: "'Inter', sans-serif" };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', background: '#fff', borderBottom: '1px solid #E0E7E5', position: 'sticky', top: 0, zIndex: 10 };
const logoutBtn = { background: 'transparent', border: '1px solid #E74C3C', color: '#E74C3C', padding: '6px 15px', borderRadius: '4px', cursor: 'pointer' };

const mainContent = { padding: '60px 10%', maxWidth: '1200px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '40px' };
const sectionCard = { background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #EAEAEA', display: 'flex', flexDirection: 'column', gap: '25px' };
const cardHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0F0F0', paddingBottom: '20px' };
const sectionTag = { background: '#E8F5E9', color: '#2E7D32', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' };

const inputGroup = { display: 'flex', flexDirection: 'column', gap: '8px' };
const labelStyle = { fontSize: '13px', fontWeight: '600', color: '#666' };
const inputStyle = { width: '100%', padding: '14px', border: '1px solid #D1D1D1', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' };
const extraGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', background: '#FDFDFD', padding: '25px', borderRadius: '8px', border: '1px dashed #DDD' };
const faqRow = { display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', background: '#F9F9F9', borderRadius: '8px' };

const saveBtn = { background: '#7BC67B', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' };

export default Admin;