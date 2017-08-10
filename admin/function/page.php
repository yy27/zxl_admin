<?php
 function getPageHtml($page, $pages, $url){
  //最多显示多少个页码
  $_pageNum = 10;
  //当前页面小于1 则为1
  $page = $page<1?1:$page;
  //当前页大于总页数 则为总页数
  $page = $page > $pages ? $pages : $page;
  //页数小当前页 则为当前页
  $pages = $pages < $page ? $page : $pages;

  //计算开始页
  $_start = $page - floor($_pageNum/2);
  $_start = $_start<1 ? 1 : $_start;
  //计算结束页
  $_end = $page + floor($_pageNum/2);
  $_end = $_end>$pages? $pages : $_end;

  //当前显示的页码个数不够最大页码数，在进行左右调整
  $_curPageNum = $_end-$_start+1;
  //左调整
  if($_curPageNum<$_pageNum && $_start>1){  
   $_start = $_start - ($_pageNum-$_curPageNum);
   $_start = $_start<1 ? 1 : $_start;
   $_curPageNum = $_end-$_start+1;
  }
  //右边调整
  if($_curPageNum<$_pageNum && $_end<$pages){ 
   $_end = $_end + ($_pageNum-$_curPageNum);
   $_end = $_end>$pages? $pages : $_end;
  }

  $_pageHtml = '<div class="digg">';
  /*if($_start == 1){
   $_pageHtml .= '<li><a title="第一页">«</a></li>';
  }else{
   $_pageHtml .= '<li><a  title="第一页" href="'.$url.'&page=1">«</a></li>';
  }*/
  if($page>1){
   $_pageHtml .= '<a  title="上一页" href="'.$url.'?page='.($page-1).'">«</a>';
  }
  for ($i = $_start; $i <= $_end; $i++) {
   if($i == $page){
    $_pageHtml .= '<span class="current">'.$i.'</span>';
   }else{
    $_pageHtml .= '<a href="'.$url.'?page='.$i.'">'.$i.'</a>';
   }
  }
  /*if($_end == $pages){
   $_pageHtml .= '<li><a title="最后一页">»</a></li>';
  }else{
   $_pageHtml .= '<li><a  title="最后一页" href="'.$url.'&page='.$pages.'">»</a></li>';
  }*/
  if($page<$_end){
   $_pageHtml .= '<a  title="下一页" href="'.$url.'?page='.($page+1).'">»</a>';
  }
  $_pageHtml .= '</div>';
  echo $_pageHtml;
 }
 ?>