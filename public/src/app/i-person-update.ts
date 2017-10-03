export interface IPersonUpdate {
  camera_id: "Camera: USB 0",
  coordinates: {
    x: number,
    y: number,
    z: number
  },
  local_timestamp: Date,
  looking_at_screen: number,
  person_id: string,
  person_put_id: string,
  poi: number,
  record_type: string,
  rolling_expected_values?: {
    age: number,
    gender: string
  }
}
