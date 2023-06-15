import type { FC, PropsWithChildren } from "react";
import { Grid, Box, Typography } from "@mui/material";

export type GoodsDescriptionProps = PropsWithChildren<{
  width?: string | number;
}>;

const GoodsDescription: FC<GoodsDescriptionProps> = (props) => {
  return (
    <Grid container wrap="nowrap">
      <Box key={2} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <Box sx={{ pr: 2 }}>
          <Typography gutterBottom variant="body2">
            {"공구가방(중고)카드(새거) 둘 포함 가격 제습기 2만원"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${"기타 중고물폼"} • ${"3시간 전"}`}
          </Typography>
          <Typography gutterBottom variant="body2">
            {"50,000원"}
          </Typography>
          <Typography gutterBottom variant="body2">
            {`1.공구가방캐리어식 (사용감 있으나 이용하는데 문제x)
            인테리어현장에서 사용하기 편리 합니다 크며 수납동간도 굳
            2.웰빙카트는 새거나 손잡이 한 쪽 끊어짐 꿰매서 사용하세요.
            각 현재 인터넷에서 6만원씩 판매 하는 상품임
            3.제습기 2만원 작동 잘 됩니다.(10리터)
            네고x
            오셔서 가져가시면 됩니다.`}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${"관심 6"} • ${"채팅 15"} • ${"조회 261"}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default GoodsDescription;
