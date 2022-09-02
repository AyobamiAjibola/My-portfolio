import React from 'react';
import { Box, Grid, LinearProgress, LinearProgressProps, Stack, Typography } from '@mui/material';
import "./skill.css";
import { skill, skill2 } from '../project/resource';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const left = {
  marginRight: "-6rem"
}
const right = {
  marginRight: "-6rem"
}

export default function Skill() {

  return (
    <div className="skill" id="skill">
      <div className="title"><h1>Skill</h1></div>
        <Grid container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Grid md={6} xs={12} sx={left} item>
            {skill.map((d: any) => (
              <Box sx={{ width: '80%' }} key={d.id}>
                <Typography
                  variant='body2'
                  sx={{
                    marginTop: {md:"1.5rem", sm: "0.8rem", xs: "0.8rem"},
                    fontWeight: 600,
                    color: "#585858"
                  }}
                >
                  {d.name}
                </Typography>
                <LinearProgressWithLabel
                  value={d.grade}
                  color= "success"
                />
              </Box>
            ))}
          </Grid>
          <Grid md={6} xs={12} sx={right} item>
            {skill2.map((d: any) => (
              <Box sx={{ width: '80%' }} key={d.id}>
                <Typography
                  variant='body2'
                  sx={{
                    marginTop: {md:"1.5rem", sm: "0.8rem", xs: "0.8rem"},
                    fontWeight: 600,
                    color: "#585858"
                  }}
                >
                  {d.name}
                </Typography>
                <LinearProgressWithLabel value={d.grade} color='success' />
              </Box>
            ))}
          </Grid>
        </Grid>
    </div>
  )
}
