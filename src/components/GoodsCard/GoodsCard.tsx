import type { FC, PropsWithChildren } from "react";
import { Grid, Box, Typography } from "@mui/material";

export type GoodsCardProps = PropsWithChildren<{
  width?: string | number;
}>;

const GoodsCard: FC<GoodsCardProps> = (props) => {
  return (
    <Grid container wrap="nowrap">
      <Box key={2} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <img
          style={{ width: 210, height: 118 }}
          alt={"Don Diablo @ Tomorrowland Main Stage 2019 | Official…"}
          src={
            "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
          }
        />
        <Box sx={{ pr: 2 }}>
          <Typography gutterBottom variant="body2">
            {"위니아 제습기 팝니다"}
          </Typography>
          <Typography gutterBottom variant="body2">
            {"70,000원"}
          </Typography>
          <Typography display="block" variant="caption">
            {"서울시 관악구 신사동"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${"관심 7"} • ${"채팅 20"}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default GoodsCard;
