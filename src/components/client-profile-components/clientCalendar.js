import React, { useState } from "react";

function ClientCalendar() {
  const [calendarIsOpen, setCalendar] = useState(true);

  return (
    <div
      className={
        calendarIsOpen ? "calendar open clearfix" : "calendar clearfix"
      }
    >
      <button
        onClick={() => setCalendar(!calendarIsOpen)}
        className={calendarIsOpen ? "button-arrow" : "button-arrow active"}
      >
        <img src="./images/icons/arrow.svg" alt="" />
      </button>
      <h2>Calendar</h2>
      <div className="calendar-wrapper">
        <ul className="date-type">
          <li>
            <button>Week</button>
          </li>
          <li>
            <button className="active">Month</button>
          </li>
          <li>
            <button>Year</button>
          </li>
        </ul>
        <div className="date-control">
          <button className="prev">
            <img src="./images/icons/arrow.svg" alt="" />
          </button>
          <h3>December 2019</h3>
          <button className="next">
            <img src="./images/icons/arrow.svg" alt="" />
          </button>
        </div>
        <ul className="days-of-week">
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>San</li>
          <li>Sun</li>
        </ul>
        <ul className="days">
          <li>
            <button className="prev-month">27</button>
          </li>
          <li>
            <button className="prev-month">28</button>
          </li>
          <li>
            <button className="prev-month">29</button>
          </li>
          <li>
            <button className="prev-month">30</button>
          </li>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button className="active red-task">4</button>
          </li>
          <li>
            <button>5</button>
          </li>
          <li>
            <button>6</button>
          </li>
          <li>
            <button>7</button>
          </li>
          <li>
            <button className="red-task">8</button>
          </li>
          <li>
            <button>9</button>
          </li>
          <li>
            <button>10</button>
          </li>
          <li>
            <button>11</button>
          </li>
          <li>
            <button className="yellow-task">12</button>
          </li>
          <li>
            <button>13</button>
          </li>
          <li>
            <button>14</button>
          </li>
          <li>
            <button>15</button>
          </li>
          <li>
            <button>16</button>
          </li>
          <li>
            <button className="purple-task">17</button>
          </li>
          <li>
            <button>18</button>
          </li>
          <li>
            <button>19</button>
          </li>
          <li>
            <button>20</button>
          </li>
          <li>
            <button>21</button>
          </li>
          <li>
            <button>22</button>
          </li>
          <li>
            <button>23</button>
          </li>
          <li>
            <button>24</button>
          </li>
          <li>
            <button>25</button>
          </li>
          <li>
            <button>26</button>
          </li>
          <li>
            <button>27</button>
          </li>
          <li>
            <button>28</button>
          </li>
          <li>
            <button>29</button>
          </li>
          <li>
            <button>30</button>
          </li>
          <li>
            <button>31</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ClientCalendar;
