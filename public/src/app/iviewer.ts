enum gender {
  male,
  female
}

export interface IViewer {
  local_timestamp: number;
  person_id: string;
  person_put_id: string;
  rolling_expected_values: {
    age: number;
    gender: gender;
    handUp: boolean;
  };
}
