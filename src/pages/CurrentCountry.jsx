import { KeyboardBackspace } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CurrentCountry = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        variant="text"
        startIcon={<KeyboardBackspace />}
        size="small"
      >
        Dark mode
      </Button>
    </div>
  );
};

export default CurrentCountry;
