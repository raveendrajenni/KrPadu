import "./App.css";
import { Link } from "react-router-dom";

function L14() {
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
          <h3 class="panel-title">Tirupalu</h3>
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
            <td>90</td>
            <td>250</td>
            <td>300</td>
            <td>50</td>
            <td>---</td>
          </tr>
          <tr>
            <th>inns</th>
            <td>85</td>
            <td>240</td>
            <td>280</td>
            <td>40</td>
            <td>---</td>
          </tr>
          <tr>
            <th>not outs</th>
            <td>70</td>
            <td>140</td>
            <td>150</td>
            <td>15</td>
            <td>---</td>
          </tr>
          <tr>
            <th>balls faced</th>
            <td>210</td>
            <td>350</td>
            <td>400</td>
            <td>350</td>
            <td>---</td>
          </tr>
          <tr>
            <th>runs scored</th>
            <td>250</td>
            <td>300</td>
            <td>340</td>
            <td>320</td>
            <td>---</td>
          </tr>
          <tr>
            <th>strike rate</th>
            <td>119.04</td>
            <td>85.71</td>
            <td>85.76</td>
            <td>91.42</td>
            <td>---</td>
          </tr>
          <tr>
            <th>bat-avg</th>
            <td>----</td>
            <td>---</td>
            <td>---</td>
            <td>12.84</td>
            <td>---</td>
          </tr>
          <tr>
            <th>10/20</th>
            <td>2/3</td>
            <td>4/2</td>
            <td>2/3</td>
            <td>4/3</td>
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
            <td>mid-on</td>
            <td>mid-on</td>
            <td>mid-on</td>
            <td>mid-on</td>
            <td>---</td>
          </tr>
          <tr>
            <th>best-bat</th>
            <td>25</td>
            <td>27</td>
            <td>31</td>
            <td>37</td>
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

export default L14;
