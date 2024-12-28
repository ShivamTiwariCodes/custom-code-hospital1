"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationType = exports.AppointmentStatus = void 0;
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus[AppointmentStatus["Scheduled"] = 0] = "Scheduled";
    AppointmentStatus[AppointmentStatus["Completed"] = 1] = "Completed";
    AppointmentStatus[AppointmentStatus["Cancelled"] = 2] = "Cancelled";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
var ConsultationType;
(function (ConsultationType) {
    ConsultationType[ConsultationType["In_person"] = 0] = "In_person";
    ConsultationType[ConsultationType["Online"] = 1] = "Online";
})(ConsultationType || (exports.ConsultationType = ConsultationType = {}));
