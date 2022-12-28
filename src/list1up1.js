import "./App.css";
import { Link } from "react-router-dom";

function L11() {
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
          <h3 class="panel-title">B Ravi</h3>
        </div>
        <div class="panel-body">Right Handed Batsman--Right Arm MediumFast</div>
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
            <td>90</td>
            <td>250</td>
            <td>300</td>
            <td>50</td>
            <td>---</td>
          </tr>
          <tr>
            <th>inns</th>
            <td>80</td>
            <td>200</td>
            <td>250</td>
            <td>45</td>
            <td>---</td>
          </tr>
          <tr>
            <th>not outs</th>
            <td>60</td>
            <td>85</td>
            <td>113</td>
            <td>19</td>
            <td>---</td>
          </tr>
          <tr>
            <th>balls faced</th>
            <td>150</td>
            <td>260</td>
            <td>500</td>
            <td>650</td>
            <td>---</td>
          </tr>
          <tr>
            <th>runs scored</th>
            <td>175</td>
            <td>200</td>
            <td>350</td>
            <td>500</td>
            <td>---</td>
          </tr>
          <tr>
            <th>strike rate</th>
            <td>116.6</td>
            <td>76.9</td>
            <td>70</td>
            <td>76</td>
            <td>---</td>
          </tr>
          <tr>
            <th>bat-avg</th>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>19.23</td>
            <td>---</td>
          </tr>
          <tr>
            <th>10/20</th>
            <td>4/3</td>
            <td>1/5</td>
            <td>---</td>
            <td>---</td>
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
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <th>strongest side</th>
            <td>all sides</td>
            <td>all sides</td>
            <td>all sides</td>
            <td>all sides</td>
            <td>---</td>
          </tr>
          <tr>
            <th>best-bat</th>
            <td>23</td>
            <td>29</td>
            <td>33</td>
            <td>45</td>
            <td>---</td>
          </tr>
          <tr>
            <th>balls bowled</th>
            <td>360</td>
            <td>1320</td>
            <td>1800</td>
            <td>600</td>
            <td>---</td>
          </tr>
          <tr>
            <th>runs-flow</th>
            <td>300</td>
            <td>900</td>
            <td>1400</td>
            <td>500</td>
            <td>---</td>
          </tr>
          <tr>
            <th>economy</th>
            <td>5.00</td>
            <td>4.09</td>
            <td>4.66</td>
            <td>5.00</td>
            <td>---</td>
          </tr>
          <tr>
            <th>wickets</th>
            <td>35</td>
            <td>47</td>
            <td>49</td>
            <td>87</td>
            <td>---</td>
          </tr>
          <tr>
            <th>ball-avg</th>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
            <td>5.747</td>
          </tr>
          <tr>
            <th>best-ball</th>
            <td>3-5</td>
            <td>4-13</td>
            <td>4-25</td>
            <td>3-22</td>
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

export default L11;
