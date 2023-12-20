import createEmotionCache from "@/utils/emotionCache";
import { EmotionCache } from "@emotion/cache";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

import SearchIcon from '@mui/icons-material/Search';

export default function App({
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <Box sx={{ width: '100%', height: '100%', pt: 4 }}>
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <Typography variant="h5" fontFamily='Mono'><Typography fontFamily='Mono' variant="h5" component='span' color='primary'>X</Typography>TOOLS</Typography>
        <Paper sx={{ width: '600px', borderRadius: '4px', ml: 1 }}>
          <IconButton sx={{ padding: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            autoFocus
            // value={query}
            // onChange={(event) => setQuery(event.target.value)}
            placeholder="输入关键词搜索工具"
            inputProps={{ 'aria-label': 'search icons' }}
            sx={{ grow: 1 }}
          />
        </Paper>
      </Stack>
      
    </Box>
  );
}
