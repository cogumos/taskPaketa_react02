import './App.css';

function App() {
  return (
    <function>
      <div>
        <div className="container">
          <h3><strong>Invoice</strong></h3>
          <table class="table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>UNIT</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three Unicorns</td>
                <td>1</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Awesome Jacks</td>
                <td>2</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Two Kings</td>
                <td>1</td>
                <td>$15.00</td>
              </tr>
            </tbody>
          </table>
          <div class="total">
            <span>Total</span>
            <span>$60.00</span>
          </div>
          <button class="btn" >PAY NOW</button>
        </div>
      </div>
    </function>
  );
}

export default App;
