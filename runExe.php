<?php



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $JSONDATA = file_get_contents("php://input");
    $inputData = json_decode($JSONDATA, true);
    $income = $inputData['income'];
    $hour = $inputData['hour'];
    $shift = $inputData['shift'];
    $overtime = $inputData['overtime'];
    $tax = $inputData['tax'];
    $targetFile = "SalaryCalculator2.0.exe";
    $command = "$targetFile $income $hour $shift $overtime $tax";
    $output = shell_exec($command);
    header('Content-Type: application/json');
    echo json_encode(['output' => $output]);
   
}




?>