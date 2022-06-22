// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/upload-files.component";
import './App.css';

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>KYC</h3>
        <h4>upload Files</h4>
      </div>
      <UploadFiles />
    </div>
  );
}

export default App;
