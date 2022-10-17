import { useState, FormEvent } from 'react';
import { postRobotData } from '../services';
import { RobotDataType } from '../interface';
import styles from './RobotInfoForm.module.scss';

const initialData = {
  name: '',
  numberOfArms: 0,
  location: 'nowhere',
};

function RobotInfoForm() {
  const [data, setData] = useState<RobotDataType>(initialData);
  const { name, numberOfArms, location } = data;

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const { id, value } = target;

    setData({
      ...data,
      [id]: target.type === 'number' ? +value : value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postRobotData(data);
  }

  return (
    <form
      className={styles.RobotInfoForm}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name}/>
      <label htmlFor="numberOfArms">Number of arms</label>
      <input type="number" id="numberOfArms" name="numberOfArms" value={numberOfArms} />
      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" value={location} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default RobotInfoForm
