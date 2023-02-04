import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const CreateToggleButton = () =>{
    
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="info"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">ALL</ToggleButton>
      <ToggleButton value="Appreal">APPAREL</ToggleButton>
      <ToggleButton value="electronics">ELECTRONICS</ToggleButton>
      <ToggleButton value="personal care">PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
  );
}
export default CreateToggleButton;