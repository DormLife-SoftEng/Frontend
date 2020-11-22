/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Googlemap from "../google/google";
import RoomModal from "./RoomModal";
import { propsDorm, Room, Utilities } from "./type";

function DormInfo(dorm: propsDorm) {
    let allowedPet: boolean = false;
    let allowedCooking: boolean = false;
    return (
        <div style={{ textTransform: "capitalize" }}>
            <p>Type: {dorm.type}</p>
            <p>Allowed Sex: {dorm.allowedSex}</p>
            <p>Address: {dorm.address.address}</p>
            <p>Phone Number: {dorm.contact.telephone}</p>
            {dorm.contact.website != null && (
                <p>Website: {dorm.contact.website}</p>
            )}
            <p>
                Map:
                <Googlemap
                    coordinate={{
                        lat: dorm.address.coordinate[0],
                        lng: dorm.address.coordinate[1],
                    }}
                    containerStyle={{ width: "193px", height: "193px" }}
                    zoom={13}
                />
            </p>
            <p>
                Facilities:{" "}
                {dorm.utility.map((util: Utilities, index: number) => {
                    if (util.type === "Cooking") {
                        allowedCooking = true;
                        return <></>;
                    }
                    if (util.type === "Pet") {
                        allowedPet = true;
                        return <></>;
                    }
                    let unit = "m";
                    if (util.distance != null && util.distance >= 1) {
                        unit = "km";
                    } else if (util.distance != null) {
                        util.distance = util.distance * 1000;
                    }
                    return (
                        <span>
                            {index != 0 && <span>{", "}</span>}
                            {util.type}
                            {util.distance != null && util.distance > 0 && (
                                <span> ({util.distance + unit})</span>
                            )}
                            {util.description != null &&
                                util.description.trim() != "" && (
                                    <span> ({util.description})</span>
                                )}
                        </span>
                    );
                })}
            </p>
            <p>Allowed Pet: {allowedPet ? "Yes" : "No"}</p>
            <p>Allowed Cooking: {allowedCooking ? "Yes" : "No"}</p>
            <p>
                Room Type:{" "}
                {dorm.room.map((rt: Room, index: number) => {
                    return (
                        <>
                            {index !== 0 && <span>{", "}</span>}
                            <RoomModal key={index} room={rt} />
                        </>
                    );
                })}
            </p>
        </div>
    );
}
export default DormInfo;
