import React, { useState } from "react";
import { useSelector } from "react-redux";

function ClientStorage() {
  const [isStorageOpen, setIsStorageOpen] = useState(true);

  const storageGraphInfo = useSelector(state => state.storage.storageGraphInfo);
  const isStorageFilledUpgraded = useSelector(
    state => state.storage.isStorageFilledUpgraded
  );
  const storageEmpty = useSelector(state => state.storage.storageUsed);
  const storageField = useSelector(state => state.storage.storageField);
  return (
    <div
      className={isStorageOpen ? "storage open clearfix" : "storage clearfix"}
    >
      <button
        className="view-all"
        onClick={() => setIsStorageOpen(!isStorageOpen)}
      >
        View all
      </button>
      <h2>Storage</h2>
      <div className="graphic-wrapper clearfix">
        <button className="date-picker">
          <img src="/images/icons/calendar.svg" alt="" />
          Month
        </button>

        <h3>
          Available Space <span>{storageField - storageEmpty} GB</span>
        </h3>

        <ul className="graph-positions">
          {isStorageFilledUpgraded ? (
            <>
              <li>500</li>
              <li>400</li>
              <li>300</li>
              <li>200</li>
              <li>100</li>
            </>
          ) : (
            <>
              <li>100</li>
              <li>80</li>
              <li>60</li>
              <li>40</li>
              <li>20</li>
            </>
          )}
        </ul>
        <div className="graph-wrapper">
          <ul className="graph-info">
            {storageGraphInfo.map(graph => (
              <li key={graph.id}>
                <span
                  className="uploads"
                  style={{
                    height: `${
                      isStorageFilledUpgraded
                        ? graph.status.uploads / 5
                        : graph.status.uploads
                    }%`
                  }}
                ></span>
                <span
                  className="received"
                  style={{
                    height: `${
                      isStorageFilledUpgraded
                        ? graph.status.fileReceived / 5
                        : graph.status.fileReceived
                    }%`
                  }}
                ></span>
                <span
                  className="left"
                  style={{
                    height: `${
                      isStorageFilledUpgraded
                        ? graph.status.spaceLeft / 5
                        : graph.status.spaceLeft
                    }%`
                  }}
                ></span>
              </li>
            ))}
          </ul>
          <ul className="graph-month">
            {storageGraphInfo.map(elm => (
              <li key={elm.id}>{elm.month}</li>
            ))}
          </ul>
        </div>
        <ul className="memo-info">
          <li className="uploads">Uploads</li>
          <li className="received">Files Received</li>
          <li className="left">Space Left</li>
        </ul>
      </div>
    </div>
  );
}

export default ClientStorage;
