import React, { useState } from "react";
import "./daftar.css";
import "./Sign_Up";
import { BsDisplay, BsFileX, BsFillShieldLockFill } from "react-icons/bs";

export default function Sig_Up() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nra, setNra] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch(
        "https://d942-140-213-1-103.ngrok-free.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nra,
            namaLengkap,
            email,
            nomorHp,
            password,
          }),
        }
      );
      if (response.ok) {
        alert("Pendaftaran Berhasil");
      } else {
        const errorData = await response.json();
        alert("Pendaftaran Gagal: " + errorData.message);
      }
    } catch (error) {
      alert("Pendaftaran Gagal: " + error.message);
    }
  };


  return (
    <div className="main-container">
      <h1 className="title DATA">Database Anggota</h1>
      <div className="database-anggota" />
      <div className="frame">
        <span className="sign-up-11">Sign Up</span>
        <div className="flex-row-fb">
          <div className="bendera11" />
          <button className="rectangle123" onClick={handleSignUp}></button>
        </div>
        <span className="sign-up-manage2">
          Sign Up to manage all your devices
        </span>
        <span className="nraa">NRA</span>
        <input
          className="rectangle-1"
          value={nra}
          onChange={(e) => setNra(e.target.value)}
        />
        <span className="nama_lengkap">Nama Lengkap</span>
        <input
          className="rectangle-2"
          value={namaLengkap}
          onChange={(e) => setNamaLengkap(e.target.value)}
        />
        <span className="email">Email</span>
        <input
          className="rectangle-33"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="nomorhp">Nomor Hp/Wa</span>
        {<input className='rectangle-66' value={nomorHp} onChange={e => setNomorHp(e.target.value)}/> }
        <span className="password11">Password</span>
        <div className="flex-row-66">
          <input
            type={passwordVisible ? "text" : "password"}
            className="rectangle-46 btniconn"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ paddingRight: "40px" }}
          />
          <button
            type="button"
            className="toggle-password-visibility2"
            onClick={togglePasswordVisibility}
            style={{
              position: "relative",
              right: "8%",
              transform: "translateY(-15%)",
            }}
          >
            {passwordVisible ? "🙉" : "🙈"}
          </button>
        </div>
        {/* end input */}

        <div className="flex-row-5">
          <div className="sign-up-section">
            <span className="do-not-have-account22">
              Do not have an account?
            </span>
            <span className="sign-up-button3" style={{ color: "white" }}>
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
