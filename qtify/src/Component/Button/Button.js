import React, { useState } from 'react';
import styles from "./Button.module.css";
import { 
  Stack, 
  Box ,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CustomButton = ({children}) => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [open1, setOpen1] = useState(false);
  const [formError, setFormError] = useState(false);
  const [Describe,setDescribe]=useState("")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setOpen1(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!feedback || feedback.trim() === '') {
      setFormError(true);
      return;
    } else {
      setFormError(false);
    }
    console.log("submitted");
    console.log(feedback);
    setFeedback('');
    setDescribe('')
    setOpen1(true);

    setTimeout(() => {
      handleClose();
    }, 4000);
  }

  const handleFeedback = (e) => {
    setFeedback(e.target.value);
    setFormError(false);
  }


  const handleDescription = (e)=>{
     setDescribe(e.target.value)
     setFormError(false)
  }

  return (
    <>
      <button
        className={styles.button}
        onClick={handleClickOpen}
      >
        {children}
      </button>
    
      <Dialog open={open} onClose={handleClose}>
        <Box>
          <Box 
            display={"flex"}
            justifyContent={'space-around'}
          >
            <DialogTitle textAlign={'center'}>Feedback</DialogTitle>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" onClick={handleClose}/>
            </IconButton>
          </Box>
            
          <DialogContent>
            <Stack
              component="form"
              sx={{
                width: 500,
                maxWidth: '100%',
                height:500,
              }}
              noValidate
              spacing={2}
              autoComplete="off"
            >
              <TextField
                id="name"
                label="Full name"
                variant="outlined"
                fullWidth
                required 
                error={formError}
                helperText={formError ? "Please fill out this field" : ""} 
                onChange={handleFeedback} 
              />
              
              <TextField
                        id="email"
                         label="Email ID"
                         variant="outlined"
                         fullWidth
                         error={formError} 
                         helperText={formError ? "Please fill out this field" : ""}
                         onChange={handleFeedback}
                   />

              <TextField
                        id="subject"
                        label="subject"
                         variant="outlined"
                         fullWidth
                       
                    />


              <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
                value={Describe}
                onChange={handleDescription}
              />
            </Stack>
          </DialogContent>
        </Box>
     
        <DialogActions>
          <Button 
            onClick={handleSubmit} 
            color="success" 
            variant="contained"
          >
            Submit
          </Button>

          <Snackbar 
            open={open1} 
            autoHideDuration={1000} 
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Thank you!
            </Alert>
          </Snackbar>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CustomButton;
