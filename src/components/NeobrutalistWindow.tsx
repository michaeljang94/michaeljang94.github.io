import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface NeobrutalistWindowProps {
  title: string;
  content: string;
  githubLink: string;
}

export const NeobrutalistWindow: React.FC<NeobrutalistWindowProps> = ({
  title,
  content,
  githubLink,
}) => {
  return (
    <>
      <Card
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          width: '300px',
          height: '250px',
          translate: '-6px -6px',
          backgroundColor: 'white',
          border: '3px solid #000000',
          borderRadius: '5px',
          boxShadow: '12px 12px 0 #000000',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          ':hover': {
            translate: '-6px',
          },
        }}
      >
        <CardHeader
          sx={{
            borderBottom: '3px solid #000000',
            width: '100%',
            height: '32px',
            backgroundColor: '#ffffff',
            padding: '5px 12px',
            color: '#000000',
          }}
          title={title}
          slotProps={{
            title: {
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '14px',
              fontWeight: '900',
            },
          }}
        />
        <CardContent>
          <Typography sx={{ padding: '8px 12px', fontSize: '14px', fontWeight: '600' }}>
            {content}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            onClick={() => {
              window.open(new URL(githubLink));
            }}
            sx={{
              padding: '5px 10px',
              marginTop: '10px',
              border: ' 3px solid #000000',
              boxShadow: '5px 5px 0 #000000',
              fontWeight: '750',
              backgroundColor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                translate: '1.5px 1.5px',
                boxShadow: '1.5px 1.5px 0 #000000',
                backgroundColor: 'black',
                color: 'white',
              },
              ':active': {
                translate: '3px 3px',
                boxShadow: '0 0 0 #000000',
              },
            }}
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
