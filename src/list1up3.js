import "./App.css";
import { Link } from "react-router-dom";

function L13() {
  return (
    <div>
      <div>
        <center>
          <h3>PLAYER PERFORMANCE WITH BAT AND BALL</h3>
        </center>
      </div>
      <div class="container">
        <center>
          <img
            src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            class="img-rounded"
            alt="Cinque Terre"
            width="200"
            height="200"
          />
        </center>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">K Venkat</h3>
        </div>
        <div class="panel-body">Right Handed Batsman</div>
        <table class="table">
          <tr>
            <th></th>
            <th>4 OVERS</th>
            <th>6 OVERS</th>
            <th>8 OVERS</th>
            <th>10 OVERS</th>
            <th>TEST</th>
          </tr>
          <tr>
            <th>matches</th>
            <td>85</td>
            <td>200</td>
            <td>250</td>
            <td>40</td>
            <td>---</td>
          </tr>
          <tr>
            <th>inns</th>
            <td>85</td>
            <td>70</td>
            <td>145</td>
            <td>29</td>
            <td>---</td>
          </tr>
          <tr>
            <th>not outs</th>
            <td>20</td>
            <td>30</td>
            <td>45</td>
            <td>9</td>
            <td>---</td>
          </tr>
          <tr>
            <th>balls faced</th>
            <td>130</td>
            <td>200</td>
            <td>250</td>
            <td>350</td>
            <td>---</td>
          </tr>
          <tr>
            <th>runs scored</th>
            <td>140</td>
            <td>190</td>
            <td>200</td>
            <td>230</td>
            <td>---</td>
          </tr>
          <tr>
            <th>strike rate</th>
            <td>107.69</td>
            <td>95.34</td>
            <td>80.98</td>
            <td>65.77</td>
            <td>---</td>
          </tr>
          <tr>
            <th>bat-avg</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>11.5</td>
            <td>---</td>
          </tr>
          <tr>
            <th>10/20</th>
            <td>1/2</td>
            <td>2/-</td>
            <td>3/5</td>
            <td>3/5</td>
            <td>---</td>
          </tr>
          <tr>
            <th>50's</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>75's</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>strongest side</th>
            <td>straight</td>
            <td>straight</td>
            <td>straight</td>
            <td>straight</td>
            <td>---</td>
          </tr>
          <tr>
            <th>best-bat</th>
            <td>21</td>
            <td>19</td>
            <td>27</td>
            <td>31</td>
            <td>---</td>
          </tr>
          <tr>
            <th>balls bowled</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>runs-flow</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>economy</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>wickets</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>ball-avg</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>best-ball</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
        </table>
      </div>
      <div>
        <center>
          <button>
            <Link to="/senior">click to go back</Link>
          </button>
        </center>
      </div>
    </div>
  );
}

export default L13;
