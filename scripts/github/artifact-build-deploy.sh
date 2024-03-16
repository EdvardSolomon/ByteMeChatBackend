set -e -u

echo "Building task definition..."

cp ecs-task-definition-template.json ecs-task-definition.json

aws ssm get-parameters-by-path --region=$REGION --recursive | \
jq --raw-output '.Parameters[] | "\(.Name):\(.Value)"' | \
while IFS=: read -r key value; do
  sed -i "s|%$key%|$value|g" ecs-task-definition.json
done

sed -i "s|%ECS_TASK_DEFINITION%|$ECS_TASK_DEFINITION|g" ecs-task-definition.json
sed -i "s|%REGION%|$REGION|g" ecs-task-definition.json
sed -i "s|%CONTAINER_NAME%|$CONTAINER_NAME|g" ecs-task-definition.json
sed -i "s|%DB_NAME%|$DB_NAME|g" ecs-task-definition.json
sed -i "s|%DB_HOST%|$DB_HOST|g" ecs-task-definition.json
sed -i "s|%DB_PORT%|$DB_PORT|g" ecs-task-definition.json
sed -i "s|%DB_USER%|$DB_USER|g" ecs-task-definition.json
sed -i "s|%DB_PASSWORD%|$DB_PASSWORD|g" ecs-task-definition.json
