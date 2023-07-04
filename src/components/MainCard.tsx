import { forwardRef, CSSProperties, ReactNode, Ref } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, CardProps, CardHeaderProps, CardContentProps } from '@mui/material';
import { KeyedObject } from '../types/root';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

export interface MainCardProps extends KeyedObject {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode | string;
  subheader?: ReactNode | string;
  style?: CSSProperties;
  content?: boolean;
  contentSX?: CardContentProps['sx'];
  darkTitle?: boolean;
  divider?: boolean;
  sx?: CardProps['sx'];
  secondary?: CardHeaderProps['action'];
  shadow?: string;
  elevation?: number;
  title?: ReactNode | string;
  codeHighlight?: boolean;
  codeString?: string;
  modal?: boolean;
}

const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      subheader,
      content = true,
      contentSX = {},
      darkTitle,
      divider = true,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      codeHighlight = false,
      codeString,
      modal = false,
      ...others
    }: MainCardProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const theme = useTheme();
    boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;

    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          position: 'relative',
          border: border ? '1px solid' : 'none',
          borderRadius: 1,
          borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A700,
          boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow : 'inherit',
          ':hover': {
            boxShadow: boxShadow ? shadow : 'inherit'
          },
          ...(codeHighlight && {
            '& pre': {
              m: 0,
              p: '12px !important',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.75rem'
            }
          }),
          ...(modal && {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
            '& .MuiCardContent-root': {
              overflowY: 'auto',
              minHeight: 'auto',
              maxHeight: `calc(100vh - 200px)`
            }
          }),
          ...sx
        }}
      >
        {!darkTitle && title && (
          <CardHeader
            sx={headerSX}
            titleTypographyProps={{ variant: 'subtitle1' }}
            title={title}
            action={secondary}
            subheader={subheader}
          />
        )}
        {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}
        {title && divider && <Divider />}

        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}
        {codeString && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />
          </>
        )}
      </Card>
    );
  }
);

export default MainCard;

// ? forwardRef를 스타일을 DOM에 건네줄떄 사용한다? 정확히 잘모르겠다
// * useTheme()를 사용하면 MUI에 내장되어있는 style을 사용할수 있다
// ? 왜 boxShadow를 삼항연산자 형태로 나열했는지 잘모른다.
// ? MainCard를 forwardRef를 이용해서 직접적으로 DOM으로 접근하는걸
// ? 막으려고 한건 있는데 이게 복합적으로 쓰이는거 같다.
// * Card에 들어가는 style 코드를 줄이기 위해서 ref를 사용한거 같다.
// * 실제로 <Card></Card> 컴포넌트 안해서 content 관련된 코드만 있어도
// * dashboard card를 여전히 작동한다.
