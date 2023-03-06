import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./project.css";
import { data } from './resource';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import AddPagination from '../../AddPagination';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {sm: 400, xs: 300},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface State {
  open: boolean,
  pageCount: number,
  itemOffset: number,
  itemsPerPage: number,
  datas: any
}

export default function Project() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [currItems, setCurrItems] = useState([]);
  const [values, setValues] = useState<State>({
    open: false,
    pageCount: 0,
    itemOffset: 0,
    itemsPerPage: 6,
    datas: data
  });
  const handleOpen = () => {
    setValues({...values, open: true})
  };
  const handleClose = () => {
    navigate('/');
    setValues({...values, open: false});
  };

  useEffect(() => {
    const endOffset = values.itemOffset + values.itemsPerPage;
    setCurrItems(values.datas.slice(values.itemOffset, endOffset));
    setValues({...values, pageCount: Math.ceil(values.datas.length / values.itemsPerPage)});
  }, [values.itemOffset, values.itemsPerPage, values.datas]);

  return (
    <div className="project" id="project">
      <div className="title"><h1>Projects</h1></div>
      <div className="container">
        {Object.values(currItems).map((d: any)=>(
          <div className="item" key={d.id}>
            <div className="wrapper">
              <h3>
                {d.project_title.toUpperCase()}
              </h3>
              <Link to={`/${d.project_title}`} style={{textDecoration: "none", zIndex: 1}} onClick={handleOpen}>
                  {d.img &&
                    <img
                      crossOrigin="anonymous"
                      src={d.img} alt="project"
                    />
                  }
                  { !d.img && <img
                      crossOrigin="anonymous"
                      src={d.status === "done" ? "assets/loading.jpg" : "assets/under.jpg"}
                      alt="project"
                    />
                  }
              </Link>
            </div>
          </div>
          ))}
      </div>
      <AddPagination
        data={values.datas}
        itemsPerPage={values.itemsPerPage}
        pageCount={values.pageCount}
        setValues={setValues}
        values={values}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={values.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={values.open}>
          <Box sx={style}>
            {currItems.map((d: any) => (
              <Box key={d.id}>
                {d.project_title === id &&
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { sm: "100%", xs: "none" },
                        height: { sm: "20%", xs: "none" }
                      }}
                    >
                    { d.img2 &&
                      <img
                        style={{
                          width: "100%",
                          height: '100%'
                        }}
                        crossOrigin="anonymous"
                        src={d.img2} alt="project"
                      />
                    }
                    { !d.img2 && <img
                        style={{
                          width: "100%",
                          height: '100%'
                        }}
                        crossOrigin="anonymous"
                        src={d.status === "done" ? "assets/loading.jpg" : "assets/under.jpg"}
                        alt="project"
                      />
                    }
                    </Box><Typography
                      id="transition-modal-title"
                      variant="body2"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 1
                      }}
                    >
                      {d.website ? <span style={{fontWeight: 600, marginBottom: '10px'}}><a href={d.website}>{d.website}</a></span> : <span style={{fontWeight: 600, marginBottom: '10px'}}>{d.repo}</span>}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: "12px",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        color: "#262728"
                      }}
                    >
                      <b>Role:</b> {d.role}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: "12px",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        color: "#262728"
                      }}
                    >
                      <hr/>
                      <b>Responsibility:</b> {d.work_done}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: "12px",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        color: "#262728"
                      }}
                    >
                      <hr/>
                      <b>Description:</b> {d.desc}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: "12px",
                        textAlign: "justify",
                        textJustify: "inter-word",
                        color: "#262728"
                      }}
                    >
                      <hr/>
                      <b>Project Status:</b> {d.status.toUpperCase()}
                    </Typography>
                  </>
                }
              </Box>
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  color: "#DC143C",
                  backgroundColor: "white",
                  boxShadow: 5,
                  border: "0.5 solid #DC143C",
                  borderRadius: 2,
                  marginTop: 2,
                  marginBottom: 2,
                  width: "40%",
                  fontWeight: 600,
                  '&:hover': {
                    color: "white",
                    backgroundColor: "#DC143C",
                    border: "none"
                  }
                }}
              >close</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
