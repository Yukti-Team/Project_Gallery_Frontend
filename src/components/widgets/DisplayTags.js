import { AutoAwesome} from "@mui/icons-material";
import {  Chip, Stack } from "@mui/material";

const randomColors = [
  "#FF6B6B",
  "#71AFFF",
  "#FFE66D",
  "#FFB76B",
  "#6BFF9F",
  "#AF6BFF",
  "#FF6BB7",
  "#A0A0A0",
  "000000",
  "#8D99AE",
];

const DisplayTags = ({ tags }) => {
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center', marginTop: "10px" }}>
      <Stack direction="row" spacing={3} sx={{ overflowX: "auto" ,maxWidth:"80vw" }}>
        {Array.isArray(tags) &&
          tags.map((tag, index) => {
            return (
              <Chip
                key={index}
                label={tag}
                size='large'
                variant=""
                icon={<AutoAwesome style={{ fontSize: 20, color: "white" }}/>}
                style={{ backgroundColor: randomColors[index % randomColors.length] }}
              />
            );
          })}
      </Stack>
    </div>
  );
};

export default DisplayTags;
