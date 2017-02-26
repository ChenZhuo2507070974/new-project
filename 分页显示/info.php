<?php
  header('Content-Type: application/json');
  @$pno=$_REQUEST['pageNum'];
  if ($pno===null) {
    $pno=1;
  }else {
    $pno=intval($pno);
  }
  require('init.php');
  $output=[
    'recordCount'=>0,
    'pageSize'=>4,
    'pageCount'=>0,
    'pageNum'=>$pno,
    'data'=>null
  ];
  $sql="SELECT COUNT(*) FROM info";
  $res=mysqli_query($conn,$sql);
  $row=mysqli_fetch_row($res);
  $output['recordCount']=intval($row[0]);
  $output['pageCount']=ceil($output['recordCount']/$output['pageSize']);

  $start=($output['pageNum']-1)*$output['pageSize'];
  $count=$output['pageSize'];
  $sql="SELECT * FROM info LIMIT $start,$count";
  $res=mysqli_query($conn,$sql);
  $output['data']=mysqli_fetch_all($res,MYSQLI_ASSOC);
  echo json_encode($output);
 ?>
