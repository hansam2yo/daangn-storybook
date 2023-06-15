import type { FC, PropsWithChildren } from "react";
import { Grid, Paper, Typography, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export type RecomendStoreProps = PropsWithChildren<{
  width?: string | number;
}>;

const RecomendStore: FC<RecomendStoreProps> = (props) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                이천 코코카리브
              </Typography>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  component="div"
                  color="text.secondary"
                >
                  율현동
                </Typography>
              </Grid>
              <Typography variant="body2" gutterBottom>
                코코카리브 - 2022년 시즌2 오픈 페스티벌 카브리해를 닮은 이국적인
                프라이빗 풀
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${"후기 15"} • ${"단골 2,716"} • ${"카페"}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecomendStore;
