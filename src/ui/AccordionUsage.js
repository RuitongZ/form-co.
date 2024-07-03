import { CUSTOMER_SERVICE_QUESTIONS } from '../data/customer-service-questions';
import IconRenderer from '../components/IconRenderer';

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const titleBox = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '10px',
  borderBottom: '1px solid #000',
  gap: '8px',
};

function AccordionUsage() {
  return (
    <>
      {CUSTOMER_SERVICE_QUESTIONS.map((item, index) => (
        <Box key={index} sx={{ width: '80%', marginBottom: '60px' }}>
          <Box key={item} sx={titleBox}>
            <IconRenderer name={item.name} />
            <Typography sx={{ fontSize: '20px' }}>{item.title}</Typography>
          </Box>

          {item.questions?.map((question, qIndex) => (
            <Accordion
              key={`${index}-${qIndex}`}
              elevation={0}
              sx={{
                '&::before': {
                  display: 'none',
                },
                backgroundColor: 'transparent',
                borderBottom: '1px solid #000',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-${qIndex}-content`}
                id={`panel${index}-${qIndex}-header`}
              >
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.answers[qIndex].split('\n').map((line, lineIndex) => (
                  <Typography
                    key={lineIndex}
                    sx={{
                      fontSize: '14px',
                      whiteSpace: 'pre-line',
                      marginBottom: '10px',
                    }}
                  >
                    {line}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </>
  );
}

export default AccordionUsage;
